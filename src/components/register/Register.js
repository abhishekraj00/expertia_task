import React, { useEffect, useState } from "react";
import "./register.css";
import img1 from "../../imgaes/img.svg";
import { useNavigate, Link } from "react-router-dom";

function Register() {

    //useNavigate hook to send user Dashboard
  const navigate = useNavigate();

  //userData saving
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //for storing error Messsage
  const [errorUsername, setErrorUsername] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const [errorConfirmPassword, setErrorConfirmPassword] = useState();

  //for making error empty;
  useEffect(() => {
    setErrorUsername("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfirmPassword("");
  }, [user]);


  // function called on registration button
  function registration() {
    
    // validation
    if (
      !user.username ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      !user.username && setErrorUsername("⚠️ Username can't be Empty");
      !user.email && setErrorEmail("⚠️ email can't be Empty");
      !user.password && setErrorPassword("⚠️ password can't be Empty");
      !user.confirmPassword &&
        setErrorConfirmPassword("⚠️ confirmPassword can't be Empty");

        return;
    }

    if (user.password !== user.confirmPassword) {
      setErrorConfirmPassword("⚠️ Password is not  matching ");
      return;
    }

    if (user.password.length <=8 ) {
        setErrorPassword("⚠️ password length must be 8 character");
        return;
      }

    //ajex for email validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      setErrorEmail("⚠️ email format is not correct");
      return;
    }

    localStorage.setItem("userInfo", JSON.stringify(user));

    navigate("/dashboard");
  }

  return (
    <div className="login">
      <div className="left">
        <div className="left_inner">
          <h3 className="welcome">Welcome !</h3>
          <h2 className="sign_in">Sign up to </h2>
          <p className="sing_text">Lorem Ipsum is simply </p>

          {/* {Email Input Box} */}
          <label>
            Email
            <input
              type="email"
              className="input_box"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>
          {/* {Error Message } */}
          <p className="error">{errorEmail}</p>

          {/* {Username Input Box} */}
          <label>
            Username
            <input
              className="input_box"
              placeholder="Enter your username"
              value={user.username}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </label>
          {/* {Error Message } */}
          <p className="error">{errorUsername}</p>

          {/* {Password Input Box} */}
          <label>
            Password
            <input
              type="password"
              className="input_box"
              placeholder="Enter your Password"
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
          {/* {Error Message } */}
          <p className="error">{errorPassword}</p>

          {/* {Confrim Password Input Box} */}
          <label>
            Confrim Password
            <input
              type="password"
              className="input_box"
              placeholder="Confrim your Password"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </label>
          {/* {Error Message } */}
          <p className="error">{errorConfirmPassword}</p>

          <button
            className="login_btn btn btn-dark"
            type="button"
            onClick={() => registration()}
          >
            Register
          </button>

          <p style={{ alignSelf: "center" }}>
            Already have an Account ?{" "}
            {/* {use router link to navigate } */}
            <span>
              <Link to="/" className="text_btn_small">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="right">
        <img src={img1} />
      </div>
    </div>
  );
}

export default Register;
