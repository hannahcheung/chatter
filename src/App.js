import React, { useState } from "react";
import "./App.css";
import { useDB, db } from "./db";
import Message from "./Message";
import NamePicker from "./NamePicker";
import TextInput from "./TextInput";
import Camera from "react-snap-pic";

function App() {
  // empty array of text messages
  // const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const [username, setUsername] = useState("");
  const messages = useDB();

  function sendMessage(text) {
    // do not send bubble if text is empty or only whitespace
    if (text.trim() !== "") {
      console.log(text.trim().length);
      const newMessage = {
        text: text,
        time: Date.now(),
        user: username
      }
      // setMessages([newMessage, ...messages]);
      db.send(newMessage);
    }
  }

  // render all messages to the app screen
  function renderMessage() {
    // when looping, use the value i as the unique loop identifier var
    return messages.map((msg, i) => <Message {...msg} key={i}/>);
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
        <NamePicker setUsername={setUsername}/>
      </header>
      <div className="messages">
        {renderMessage()}
      </div>
      <TextInput sendMessage={sendMessage} showCamera = {() => setShowCamera(true)}/>
    </div>
  );
}

export default App;
