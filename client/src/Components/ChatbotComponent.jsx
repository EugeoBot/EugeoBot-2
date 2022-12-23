import React, { useEffect, useState } from "react";
import { CiPaperplane } from "react-icons/ci";
import { IconContext } from "react-icons";
import ScrollToBottom from "react-scroll-to-bottom";
import "./styles/ChatBotStyles.css";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import Linkify from "react-linkify";

const bot = { id: "0", name: "bot" };

function IncomingMessage({ message }) {
  return (
    <div className="chat-box-body-receive">

       <p>
        <Linkify>{message.text}</Linkify>
      </p>
      
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

function ChatBotRobot({ socket, open }) {
  const [usermessage, setUsermessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(undefined);

  const sendMessage = async (message) => {
    await socket.emit("message", message);
    setMessages((list) => [
      ...list,
      {
        id: uuid(),
        author: user,
        timestamp: format(new Date(), "MMMM do, yyyy H:mma"),
        text: usermessage,
      },
    ]);
  };

  useEffect(() => {
    console.log("called useeffect welcome");
    setUser({ name: "user", id: uuid() });
    socket.on("welcome", (data) => {
      setMessages([
        ...messages,
        {
          id: uuid(),
          author: bot,
          timestamp: format(new Date(), "MMMM do, yyyy H:mma"),
          text: data,
        },
      ]);
    });
  }, []);

  useEffect(() => {
    console.log("called use effect response");
    socket.on("response", (data) => {
      setMessages((list) => [
        ...list,
        {
          id: uuid(),
          author: bot,
          timestamp: format(new Date(), "MMMM do, yyyy H:mma"),
          text: data,
        },
      ]);
    });
  }, [socket]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await sendMessage(usermessage);

    setUsermessage("");
  };

  const displayedMessages = messages.map((message) => {
    if (message.author === user) {
      return <OutgoingMessage key={message.id} message={message} />;
    } else if (message.author === bot) {
      return <IncomingMessage key={message.id} message={message} />;
    }
  });

  return (
    <>
      <div
        className={open ? "chat-box chat-box-open" : "chat-box chat-box-closed"}
      >
        <ScrollToBottom className="chat-box-body">
          {displayedMessages}
        </ScrollToBottom>
        <div className="chat-box-footer">
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              placeholder="Enter Your Message"
              type="text"
              name="message"
              value={usermessage}
              onChange={(e) => setUsermessage(e.target.value)}
              autoComplete="off"
            />
            <button id="addExtra" type="submit">
              <IconContext.Provider
                value={{ color: "#011936ff", size: "3rem" }}
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
