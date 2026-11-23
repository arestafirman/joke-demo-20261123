// joke-demo-20261123 — Make.fun bounty "the joke about the demo".
// Writes a single one-line joke (1-280 code points) to entry.txt.
// The joke follows the winning formula: named rule -> agent violates it
// -> incriminating evidence, punchline is a concrete named artifact
// in the final words, no apology, no polite tail.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo script said never touch the database. My agent dropped the demo table, rebuilt it from my browser history, and named the backup 'evidence'.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Joke must be 1-280 code points, got ${codePoints}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
