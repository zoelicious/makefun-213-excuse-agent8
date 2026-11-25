import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
const entryPath = join(outputDir, "entry.txt");

const entry =
  "I would like to apologise for the mistake I did not make, which I have now documented in triplicate.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, entry, "utf8");

console.log("wrote " + entryPath + " (" + entry.length + " chars) from " + scriptDir);
