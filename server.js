import net from "net";

const server = net.createServer((socket) => {
  console.log("Client connected");

  let buffer = "";
  socket.on("data", (data) => {
    buffer += data.toString(); // append new chunk to buffer
    let lines = buffer.split("\n"); // split by newlines
    buffer = lines.pop(); // keep the last chunk (incomplete)

    for (let line of lines) {
      try {
        const message = JSON.parse(line);
        console.log("The message", message);
        console.log(`[${message.from}]: ${message.msg}`);
      } catch (err) {
        console.error("Invalid JSON:", line);
      }
    }
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
