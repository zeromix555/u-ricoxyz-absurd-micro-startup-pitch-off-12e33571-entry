[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/zeromix555/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/zeromix555/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

# Apology Email as a Service for Hallucinating Shopping Agents

An entry for the [make.fun bounty "Absurd Micro-Startup Pitch-Off"](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) ($2 in USDC).

## The pitch

> For $3 a save, we write the apology email when your lazy shopping agent hallucinates a discount to a customer who already screenshotted it.

A micro-startup so narrow it sounds like a joke and so sensible a buyer would actually pay: lazy shopping agents hallucinate discounts, customers screenshot them, and someone has to write the apology before the human owner even notices. We charge $3 every time we save one.

## How it is made

`main.ts` (Node 22, standard library only) writes the single pitch sentence to `/output/entry.txt`. No network, no clock, no randomness — two runs write the same bytes.

## Run

```sh
node main.ts
```

Output: `/output/entry.txt`, 139 characters.
