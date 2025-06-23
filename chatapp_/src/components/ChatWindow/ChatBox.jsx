import React from "react";
import appLOGO from "../../assets/app_logo.png";
import "./ChatBox.css";

const ChatBox = ({ textArr }) => {
  return (
    <div className="box">
      {textArr.length == 0 ? (
        <div className="appIntro">
          <img src={appLOGO} className="chatBOXlogo" />
          <h1>PandaGram</h1>
          <p className="tagline">
            When pandas don't hibernate, they vibe and relate 🐼🎶
          </p>
        </div>
      ) : (
        textArr.map((ele, idx) => (
          <p key={idx} className="myMSG">
            {ele}
          </p>
        ))
      )}
    </div>
  );
};

export default ChatBox;
