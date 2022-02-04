import React, { useState } from "react";
import "./TextInput.css";
import { FiCamera } from "react-icons/fi";

function TextInput(props) {
    // default value in input box is blank
    const [text, setText] = useState("");

    function send() {
        props.sendMessage(text);
        setText("");
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            send();
        }
    }

    return (
        <footer className="footer">
            <button className="camera-button"
                onClick={props.showCamera}
                style={{left:10, right:'auto'}}>
                <FiCamera style={{height:15, width:15}} />
            </button>
            <input 
                className="text-input"
                value = {text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onKeyPress}/>
            <button className="send-button">↑</button>
        </footer>
    );
}

export default TextInput;