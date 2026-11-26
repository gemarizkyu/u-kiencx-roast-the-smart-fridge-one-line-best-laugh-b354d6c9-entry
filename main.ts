// Roast the Smart Fridge: One Line, Best Laugh Wins
// make.fun bounty u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
//
// The program composes a single roast line (at most 160 characters) about
// the smart fridge that texts its owner when the door stays open too long,
// and writes it to /output/entry.txt for the judge. The line is fully
// deterministic: no clock, no randomness, no model calls, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The setup names a real behaviour: the fridge's door-open alert text.
const setup = "My smart fridge texts me if the door stays open too long";
// The pivot reframes the purchase; the punch lands the sting.
const pivot = "I paid $3,000 for cold storage";
const punch = "not a snitch that tattles to my own phone at 2 a.m.";

const line = `${setup} \u2014 ${pivot}, ${punch}`;

// The gate requires UTF-8 text of 1 to 160 characters, a single line.
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry is ${line.length} characters, must be 1-160`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be one non-empty line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
