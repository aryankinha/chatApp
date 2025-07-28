import React from "react";
import "../css/FloatingMessage.css";

const FloatingMessage = ({ src, message}) => { 
  const top = Math.random() * 80;
  const left = Math.random() * 80;

  const StyleFloat = {
    position: "absolute",
    top: `${top}vh`,
    left: `${left}vw`,
  }
  return (
    <div className="floating-msg" style={StyleFloat}>
      <img src={src} alt="User" className="avatar" />
      <div className="msg-bubble">
        <span className="msg-text">{message}</span>
      </div>
    </div>
  );
};

export default FloatingMessage;
