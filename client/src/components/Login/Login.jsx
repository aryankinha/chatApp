import React from "react";
import "./Login.css";
import loginIMG from "../../assets/logo_img.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginBox">
      <div class="loginContainer">
        <h2>LOGIN</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div class="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <Link to="/chat" className="log_sign_btn">
            LOGIN
          </Link>
        </form>
        <p className="signupText">
          Don't have an account?{" "}
          <Link to="/signup" className="signupLink">
            Sign up
          </Link>
        </p>
      </div>
      <img src={loginIMG} />
    </div>
  );
};

export default Login;
