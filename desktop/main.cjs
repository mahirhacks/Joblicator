const { app, BrowserWindow, Menu, dialog, shell } = require("electron");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const http = require("node:http");
const net = require("node:net");
const path = require("node:path");

let backendProcess = null;
let mainWindow = null;

const projectRoot = path.resolve(__dirname, "..");

function resourceRoot() {
  return app.isPackaged
    ? path.join(process.resourcesPath, "joblication")
    : projectRoot;
}

function dataRoot() {
  return path.join(app.getPath("userData"), "workspace");
}

function outputRoot() {
  if (process.env.JOBLICATION_OUTPUT_ROOT) {
    return path.resolve(process.env.JOBLICATION_OUTPUT_ROOT);
  }
  if (!app.isPackaged) {
    return path.join(projectRoot, "outputs");
  }
  return path.join(app.getPath("documents"), "Joblication", "outputs");
}

function findFreePort() {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.unref();
    probe.once("error", reject);
    probe.listen(0, "127.0.0.1", () => {
      const address = probe.address();
      const port = typeof address === "object" && address ? address.port : null;
      probe.close((error) => (error ? reject(error) : resolve(port)));
    });
  });
}

function backendHealth(url) {
  return new Promise((resolve) => {
    const request = http.get(`${url}/api/health`, (response) => {
      response.resume();
      resolve(response.statusCode === 200);
    });
    request.setTimeout(750, () => {
      request.destroy();
      resolve(false);
    });
    request.once("error", () => resolve(false));
  });
}

async function waitForBackend(url) {
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    if (await backendHealth(url)) return;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("The local Joblication service did not start within 20 seconds.");
}

function spawnBackend(port) {
  const packagedExecutable = path.join(process.resourcesPath, "python", "JoblicationServer.exe");
  const python = process.env.JOBLICATION_PYTHON || "python";
  const command = app.isPackaged ? packagedExecutable : python;
  const args = app.isPackaged
    ? []
    : [path.join(resourceRoot(), "ui", "backend", "server.py")];

  if (app.isPackaged && !fs.existsSync(command)) {
    throw new Error(`Packaged backend is missing: ${command}`);
  }

  backendProcess = spawn(command, args, {
    cwd: dataRoot(),
    windowsHide: true,
    env: {
      ...process.env,
      JOBLICATION_RESOURCE_ROOT: resourceRoot(),
      JOBLICATION_DATA_ROOT: dataRoot(),
      JOBLICATION_OUTPUT_ROOT: outputRoot(),
      JOBLICATION_HOST: "127.0.0.1",
      JOBLICATION_PORT: String(port),
      PYTHONUNBUFFERED: "1",
    },
    stdio: app.isPackaged ? "ignore" : "pipe",
  });

  if (!app.isPackaged) {
    backendProcess.stdout?.on("data", (chunk) => process.stdout.write(`[backend] ${chunk}`));
    backendProcess.stderr?.on("data", (chunk) => process.stderr.write(`[backend] ${chunk}`));
  }
  backendProcess.once("exit", (code) => {
    backendProcess = null;
    if (code && mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("joblication-backend-exited", code);
    }
  });
}

function createMenu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: "Joblication",
      submenu: [
        {
          label: "Open data folder",
          click: () => shell.openPath(dataRoot()),
        },
        {
          label: "Open outputs folder",
          click: () => shell.openPath(outputRoot()),
        },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    { role: "editMenu" },
    { role: "viewMenu" },
    { role: "windowMenu" },
  ]));
}

function createWindow(url) {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 940,
    minWidth: 1024,
    minHeight: 700,
    show: false,
    backgroundColor: "#f7f8fb",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.webContents.setWindowOpenHandler(({ url: target }) => {
    if (/^https?:/i.test(target)) shell.openExternal(target);
    return { action: "deny" };
  });
  mainWindow.webContents.on("will-navigate", (event, target) => {
    if (!target.startsWith(url)) event.preventDefault();
  });
  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.loadURL(url);
}

async function start() {
  fs.mkdirSync(dataRoot(), { recursive: true });
  fs.mkdirSync(outputRoot(), { recursive: true });
  const port = await findFreePort();
  const serviceUrl = `http://127.0.0.1:${port}`;
  spawnBackend(port);
  await waitForBackend(serviceUrl);
  createMenu();
  createWindow(serviceUrl);
}

app.whenReady().then(start).catch((error) => {
  dialog.showErrorBox("Joblication could not start", error.message);
  app.quit();
});

app.on("window-all-closed", () => app.quit());
app.on("before-quit", () => {
  if (backendProcess && !backendProcess.killed) backendProcess.kill();
});
