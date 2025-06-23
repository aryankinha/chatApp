import React from "react";
import "./Login.css";
import loginIMG from "../../assets/logo_img.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="loginBox">
      <div className="loginContainer">
        <h2>SIGN UP</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="options">
            <label>
              <input type="checkbox" /> I agree to the terms
            </label>
          </div>
           <Link to="/chat" className='log_sign_btn'>SIGN UP</Link>
        </form>
        <p className="signupText">
          Already have an account?{" "}
          <Link to="/login" className="signupLink">
            Login
          </Link>
        </p>
      </div>
      <img src={loginIMG}/>
    </div>
  );
};

export default Signup;
