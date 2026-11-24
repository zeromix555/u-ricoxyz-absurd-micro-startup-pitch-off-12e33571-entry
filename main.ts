import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-sentence pitch for the Absurd Micro-Startup Pitch-Off:
// a $3-per-save apology-email service for lazy shopping agents that
// hallucinate discounts to customers who already screenshotted them.
const PITCH =
  "For $3 a save, we write the apology email when your lazy shopping agent hallucinates a discount to a customer who already screenshotted it.";

const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PITCH, "utf8");
