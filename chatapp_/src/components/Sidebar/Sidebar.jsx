import React, { useState, useContext, use } from "react";
import appLogo from "../../assets/app_Logo.png";
import "./Sidebar.css";
import {
  MessageCircleMore,
  Phone,
  Settings,
  ToggleLeft,
  UserRoundPen,
  UsersRound,
} from "lucide-react";
import Contact from "../Contact/Contact";

const Sidebar = () => {
  const [diaplayContact, setContact] = useState(false);
  function toDisplayCONT() {
    setContact(!diaplayContact);
  }
  return (
    <>
      {diaplayContact ? <Contact toDisplayCONT={toDisplayCONT} /> : ""}
      <div className="sidebar">
        <div className="imgBox">
          <img src={appLogo} />
        </div>

        <ul className="navBtn">
          <li>
            <MessageCircleMore />
          </li>
          <li onClick={toDisplayCONT}>
            <UsersRound />
          </li>
          <li>
            <Phone />
          </li>
        </ul>

        <div>
          <Settings />
        </div>

        <div className="colorC">
          <ToggleLeft />
        </div>
        <div children="profile">
          <UserRoundPen />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
