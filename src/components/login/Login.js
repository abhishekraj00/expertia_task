import React, { useState } from "react";
import "./Login.css";
import img1 from "../../imgaes/img.svg";
import { Link } from "react-router-dom";

function Login() {

  const [username,setUserName] = useState();
  const [password,setPassword] = useState();

  function login(e){
   
  }

  return (
    <div className="login">
      <div className="left">
        <div className="left_inner">
          <h3 className="welcome">Welcome !</h3>
          <h2 className="sign_in">Sign in to </h2>
          <p className="sing_text">Lorem Ipsum is simply </p>
          <label>
            Username
            <input className="input_box" placeholder="Enter your username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
          </label>
          <label>
            Password
            <input className="input_box" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </label>

          <div className="flex">
            <label>
              <input type={"checkbox"} /> Remember me
            </label>
            <span>Forgot Password ?</span>
          </div>

          <button class="login_btn btn btn-dark" type="button" onClick={()=>login()}>
            Login
          </button>
          <p style={{ alignSelf: "center" }}>
            Don’t have an Account ? <span><Link to="/register" className="text_btn_small">Register</Link></span>
          </p>
        </div>
      </div>

      <div className="right">
        <img src={img1} alt="logo-img" />
      </div>
    </div>
  );
}

export default Login;
