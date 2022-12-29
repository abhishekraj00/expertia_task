import React, { useState } from "react";
import "./Login.css";
import img1 from "../../imgaes/img.svg";
import { useNavigate, Link } from "react-router-dom";

function getUser() {
  let userdata = JSON.parse(localStorage.getItem("userInfo"));
  return userdata;
}

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser());

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function login(e) {
    if (username === user.username && password === user.password) {
      navigate("/dashboard");
    } else {
      alert("User Doesn't Exist Register First");
    }
  }

  return (
    <div className="login">
      <div className="login_left">
        <div className="login_left_inner">
          <h3 className="welcome">Welcome !</h3>
          <h2 className="login_sign_in">Sign in to </h2>
          <p className="login_sing_text">Lorem Ipsum is simply </p>
          <label>
            Username
            <input
              className="input_box"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              className="input_box"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="flex">
            <label>
              <input type={"checkbox"} /> Remember me
            </label>
            <span>Forgot Password ?</span>
          </div>

          <button
            class="login_btn btn btn-dark"
            type="button"
            onClick={() => login()}
          >
            Login
          </button>
          <p style={{ alignSelf: "center" }}>
            Don’t have an Account ?{" "}
            <span>
              <Link to="/register" className="text_btn_small">
                Register
              </Link>
            </span>
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
