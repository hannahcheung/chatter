import React, { useState } from "react";
import "./App.css";
import Message from "./Message";
import TextInput from "./TextInput";
import Camera from "react-snap-pic";

function App() {
  // empty array of text messages
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  function sendMessage(text) {
    // do not send bubble if text is empty or only whitespace
    if (text.trim() !== "") {
      console.log(text.trim().length);
      setMessages([text, ...messages]);
    }
  }

  // render all messages to the app screen
  function renderMessage() {
    return messages.map((msg) => <Message msg={msg}/>);
  }

  // add pictures to messages (not implemented fully yet)
  function takePicture(img) {
    console.log(img);
    setShowCamera(false);
  }

  // no logo on site in order to make chatter app look cleaner
  return (
    <div className="App">
      {showCamera && <Camera takePicture={takePicture} />}
      <header className="header">
        <span className="title">CHATTER APP</span>
      </header>
      <div className="messages">
        {renderMessage()}
      </div>
      <TextInput sendMessage={sendMessage} showCamera = {() => setShowCamera(true)}/>
    </div>
  );
}

export default App;
