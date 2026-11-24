// Two-Sentence Horror — make.fun bounty u-suroto-two-sentence-horror-acea9253
// Writes exactly one original two-sentence horror story (1-400 chars)
// to /output/entry.txt. Deterministic, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "For a year, the tenant in 4B has slipped a note under my door each night, thanking me for keeping the building quiet. " +
  "Tonight's note is in my handwriting, dated three years before I moved in.";

// Self-check: the gate requires exactly two sentences, 1-400 characters.
const sentences = STORY.split(/(?<=[.!?])\s+/).filter(Boolean);
if (sentences.length !== 2) throw new Error(`expected 2 sentences, got ${sentences.length}`);
if ([...STORY].length < 1 || [...STORY].length > 400) {
  throw new Error(`story must be 1-400 characters, got ${[...STORY].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
