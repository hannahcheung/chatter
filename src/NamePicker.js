import React, { useState } from "react";
import "./NamePicker.css";
import { FiEdit } from "react-icons/fi";

function NamePicker(props) {
    const[editName, setEditName] = useState(false);
    const[name, setName] = useState("");

    function send(text) {
        setEditName(false);
        props.setUsername(text);
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            send();
        }
    }

    if (editName) {
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