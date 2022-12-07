const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const { trainChatBotIA, generateResponseAI } = require("./chatbot");
const cors = require("cors");
const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
trainChatBotIA();

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);
  socket.emit(
    "welcome",
    "Welcome 😇! I'm Eugeo your medical Assisstant. How can I help You"
  );
  io.on("message", async (data) => {
    console.log("Got A message here");
    console.log(data);
    let response = await generateResponseAI(data.msg);
    io.emit(
      "response",
      response.answer !== undefined
        ? response.answer
        : "I am sorry, I don't understand 😞 "
    );
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
