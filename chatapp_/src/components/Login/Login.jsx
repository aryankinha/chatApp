import React from 'react'
import './Login.css'
import loginIMG from '../../assets/logo_img.jpg'

const Login = () => {
  return (
    <div className='loginBox'>
        <div class="loginContainer">
        <h2>LOGIN</h2>
        <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div class="options">
            <label><input type="checkbox"/> Remember me</label>
        </div>
        <button type="submit">LOGIN</button>
        </form>
    </div>
    <img src={loginIMG}/>
  </div>
  )
}

export default Login