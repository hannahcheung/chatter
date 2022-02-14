import React from "react";

function Message(props) {
    console.log(props);
    return <div className="text-message">{props.text}</div>
}

export default Message;