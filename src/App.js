import "./App.css";
import Message from "./Message";
import TextInput from "./TextInput";
import { useState } from "react";

function App() {
  // empty array of text messages
  const [messages, setMessages] = useState([]);

  function sendMessage(text) {
    setMessages([text, ...messages]);
  }

  function renderMessage() {
    return messages.map((msg) => <Message msg={msg}/>);
  }

  // no logo on site in order to make chatter app look cleaner
  return (
    <div className="App">
      <header className="header">
        <span className="title">CHATTER APP</span>
      </header>
      <div className="messages">
        {renderMessage()}
      </div>
      <footer className="footer">
        <TextInput sendMessage={sendMessage}/>
        <button className="send-button">↑</button>
      </footer>
    </div>
  );
}

export default App;
