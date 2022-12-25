import React, { useEffect, useState } from "react";
import { CiPaperplane } from "react-icons/ci";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { BsFillMicMuteFill } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import ScrollToBottom from "react-scroll-to-bottom";
import "./styles/ChatBotStyles.css";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import Linkify from "react-linkify";
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const sendMessage = async (message) => {
    await socket.emit("message", message);
    setMessages((list) => [
      ...list,
      {
        id: uuid(),
        author: user,
        timestamp: format(new Date(), "MMMM do, yyyy H:mma"),
        text: message,
      },
    ]);
  };
  const listenAndSend = () => {
    setIsListening(!isListening);
    !isListening
      ? SpeechRecognition.startListening()
      : SpeechRecognition.stopListening();
    isListening ? sendMessage(transcript) : "";
  };
  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.log("Your browser does not support speech recognition software!");
    } else {
      console.log("Your browser supports speech recognition software");
    }
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
    socket.on("response", (data) => {
      const utterance = new SpeechSynthesisUtterance(data);
      window.speechSynthesis.speak(utterance);
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
  const handleSpeakerClick = () => {
    setIsSpeaking(!isSpeaking);
  };

  return (
    <>
      <div
        className={open ? "chat-box chat-box-open" : "chat-box chat-box-closed"}
      >
        <div className="chat-box-header">
          <p className="chat-box-status">
            <span className="pulse-animation"></span>
            <span className="chat-box-status-indicator"></span>
            <span>Eugeo</span>
            <span>On Line</span>
          </p>
          <div className="chat-box-header-buttons">
            <button type="button" onClick={handleSpeakerClick}>
              {isSpeaking ? (
                <IconContext.Provider value={{ color: "#fff", size: "2.5rem" }}>
                  <GiSpeaker />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "#fff", size: "2.5rem" }}>
                  <GiSpeakerOff />
                </IconContext.Provider>
              )}
            </button>
          </div>
        </div>
        <ScrollToBottom className="chat-box-body">
          {displayedMessages}
        </ScrollToBottom>
        <div className="chat-box-footer">
          <form
            className="chat-box-footer-form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              placeholder="Enter Your Message"
              type="text"
              name="message"
              value={usermessage}
              onChange={(e) => setUsermessage(e.target.value)}
              autoComplete="off"
            />
            <div className="chat-buttons">
              <button id="addExtra" type="submit">
                <IconContext.Provider
                  value={{ color: "#011936ff", size: "2rem" }}
                >
                  <CiPaperplane />
                </IconContext.Provider>
              </button>
              <button
                className="voice-button"
                type="button"
                onClick={listenAndSend}
              >
                {!isListening ? (
                  <IconContext.Provider
                    value={{ color: "#011936ff", size: "2rem" }}
                  >
                    <BsFillMicFill />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{ color: "red", size: "2.5rem" }}
                  >
                    <BsFillMicMuteFill />
                  </IconContext.Provider>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatBotRobot;
