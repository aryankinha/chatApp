import React from "react";
import "../css/Navbar.css";
import app_logo from "../assets/app_logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
       
        <div className="brand">
          <img src={app_logo} alt="Pandagram" className="logo" />
          <span className="brand-name">Pandagram</span>
        </div>

        <div className="auth-buttons">
          <Link to="/login"><button className="login-btn">Log in</button></Link>
          <Link to="/signup"><button className="signup-btn">Sign up</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
