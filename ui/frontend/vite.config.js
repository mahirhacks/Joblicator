import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const srcDir = resolve(import.meta.dirname, "src");

export default defineConfig({
  plugins: [react()],
  root: srcDir,
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8080",
    },
  },
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(srcDir, "index.html"),
    },
  },
});
