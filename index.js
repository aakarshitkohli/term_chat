import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

rl.on("line", (input) => {
  console.log(`Received: ${input}`);
});
