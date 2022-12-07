import React, { useEffect, useState } from "react";
import { CiPaperplane } from "react-icons/ci";
import { IconContext } from "react-icons";
import io from "socket.io-client";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

const bot = { id: "0", name: "bot" };
const socket = io("http://localhost:3000", { transports: ["websocket"] });
socket.connect(true);

function IncomingMessage({ message }) {
  return (
    <div className="chat-box-body-receive">
      <p>{message.text}</p>
      <span>{message.timestamp}</span>
    </div>
  );
}

function OutgoingMessage({ message }) {
  return (
    <div className="chat-box-body-send">
      <p>{message.text}</p>
      <span>{message.timestamp}</span>
    </div>
  );
}

function ChatBotRobot(props) {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(undefined);
  const sendMessage = async (message) => {
    socket.emit("message", { message });
    useEffect(() => {
      socket.on("response", (data) => {
        setMessages([
          ...messages,
          {
            author: bot,
            timestamp: format(new Date(), "MMMM do, yyyy H:mma"),
            text: data,
          },
        ]);
      });
    }, [socket]);
  };

  useEffect(() => {
    setUser({ name: "user", id: uuid() });
    socket.on("welcome", (data) => {
      setMessages([
        ...messages,
        {
          author: bot,
          timestamp: format(new Date(), "MMMM do, yyyy H:mma"),
          text: data,
        },
      ]);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessages([
      ...messages,
      {
        author: user,
        timestamp: format(new Date(), "MMMM do, yyyy H:mma"),
        text: userMessage,
      },
    ]);

    await sendMessage(userMessage);

    setUserMessage("");
  };

  const displayedMessages = messages.map((message, index) => {
    if (message.author === user) {
      return <OutgoingMessage key={index} message={message} />;
    } else {
      return <IncomingMessage key={index} message={message} />;
    }
  });

  return (
    <>
      <div className="chat-box">
        <div className="chat-box-body">{displayedMessages}</div>
        <div className="chat-box-footer">
          <form method="POST" onSubmit={(event) => handleSubmit(event)}>
            <input
              placeholder="Enter Your Message"
              type="text"
              name="message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button id="addExtra">
              <IconContext.Provider
                value={{ color: "#011936ff", size: "2rem" }}
              >
                <CiPaperplane />
              </IconContext.Provider>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatBotRobot;
