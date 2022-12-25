import React, { useState } from "react";
import ChatBotRobot from "./ChatbotComponent";
import io from "socket.io-client";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles/ChatBotStyles.css";

const socket = io("http://localhost:3000", { transports: ["websocket"] });
socket.connect(true);

function MainComponent() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <Header />
      <ChatBotRobot socket={socket} open={isChatOpen} />
      <div className="chat-toggler" onClick={toggleChat}>
        <FontAwesomeIcon icon={isChatOpen ? faXmark : faComments} />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default MainComponent;
