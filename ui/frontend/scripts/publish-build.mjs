import { cpSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");

for (const entry of readdirSync(dist)) {
  cpSync(join(dist, entry), join(root, entry), { recursive: true, force: true });
}
