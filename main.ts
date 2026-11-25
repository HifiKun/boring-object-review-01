// The Most Boring Object, Reviewed in One Line
// Entry for make.fun bounty u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
// The program writes a single funny, true one-line review to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "The rubber band held my cables together for three years, then snapped the one morning I actually needed it, like it had been waiting for its moment.";

const OUT_PATH = "/output/entry.txt";

// The gate only accepts 1-200 characters, a single line, not only whitespace.
// Fail loudly instead of writing an entry the judge would never see.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`Review must be 1-200 characters, got ${REVIEW.length}`);
}
if (REVIEW.includes("\n") || REVIEW.trim().length === 0) {
  throw new Error("Review must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${OUT_PATH}`);
