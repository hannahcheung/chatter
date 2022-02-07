import React, { useState } from "react";
import "./NamePicker.css";

function NamePicker() {
    const[editName, setEditName] = useState(false);
    const[name, setName] = useState("");

    function send() {
        setName("");
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            send();
        }
    }

    return(
        <div className="name-picker">
            <span className="name-title">
            Username
            </span>
            <input 
                className="name-input"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={onKeyPress}>
            </input>
            <button className="name-send-button" onClick={send}>
                OK
            </button>
        </div>
    );
}

export default NamePicker;