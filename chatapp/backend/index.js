const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("a client connected: " + socket.id);
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
});
app.get("/",(req, res)=>{
  res.send("home page")
})
server.listen(3000, () => {
  console.log("api is running...");
});
