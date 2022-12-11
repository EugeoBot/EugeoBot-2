import React from "react";
import "./App.css";
import io from "socket.io-client";
import ChatBotRobot from "./ChatbotComponent";

const socket = io("http://localhost:3000", { transports: ["websocket"] });
socket.connect(true);

function App() {
  return (
    <div className="App">
      <ChatBotRobot socket={socket} />
    </div>
  );
}
export default App;
