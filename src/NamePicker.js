import React, { useState } from "react";
import "./NamePicker.css";
import { FiEdit } from "react-icons/fi";

function NamePicker(props) {
    const[editName, setEditName] = useState(false);
    const[name, setName] = useState("");

    // change name picker to have edit sign, display name on app header
    function send(text) {
        if (text.trim() !== "") {
            setEditName(false);
            props.setUsername(text);
        }
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            send();
        }
    }

    if (editName) {
        // if edit button is pressed, change display for user to be able
        // to enter their username
        return (
            <div>
                <input 
                    className="name-input"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    onKeyPress = {onKeyPress}
                    value = {name}/>
                <button className="name-send-button" onClick={send}>
                    OK
                </button>
            </div>
        );
    } else {
        // default view when entering site or when username is set; either
        // displays set username or default "set username" value
        return(
            <div className="name-picker">
                <span className="name-title">
                {name || "Set Username:"}
                </span>
                <FiEdit size="20" onClick={() => setEditName(true)}/>
            </div>
        );
    }
}

export default NamePicker;