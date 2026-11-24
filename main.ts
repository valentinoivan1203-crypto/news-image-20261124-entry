// main.ts — copies the entry newspaper image to the output directory.
// The entry is a single static file (entry.png); this script places it in
// MAKEFUN_OUTPUT_DIR (default /output) as entry.png, byte for byte.
// The copy is deterministic: every run writes the exact same bytes, so
// re-running it never changes the output.
// Runs as an ES module: the entry's own directory is derived from
// import.meta.url, so it works no matter where it is invoked from.
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = path.join(__dirname, "entry.png");
const dst = path.join(outDir, "entry.png");

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dst);
