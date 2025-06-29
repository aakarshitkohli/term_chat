import net from "node:net";
import readline from "readline";
import { stdin as input, stdout as output } from "node:process";

const randomNum = Math.floor(Math.random() * 10) + 1;

const client = net.createConnection({ port: 5000 }, () => {
  const rl = readline.Interface({ input, output });
  rl.on("line", (input) => {
    const id = randomNum;
    client.write(JSON.stringify({ from: `User ${id}`, msg: input }) + "\n");
  });
});
