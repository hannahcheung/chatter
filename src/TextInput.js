import { useState } from "react";
import "./TextInput.css";

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
        <footer>
            <input 
                className="text-input"
                value = {text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onKeyPress}/>
        </footer>
    );
}

export default TextInput;