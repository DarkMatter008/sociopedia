import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo-new.png";
import { logIn, signUp } from "../../actions/AuthAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {


  const loading = useSelector((state) => state.authReducer.loading);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const [data, setData] = useState(initialState);
  const [isSignUp, setIsSignUp ] = useState(false);
  const [confirmPass, setConfirmPass] = useState(true);


  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
      
        // ? dispatch(signUp(data))
        // : setConfirmPass(false);
    }else {
      dispatch(logIn(data));
    }
  };

  // // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  return (
    <div className="Auth">
    {/* left */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Sociopedia</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* Login */}
      {/* right */}
      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{ isSignUp ? "Sign up" : "Log In" }</h3>

        <div>
          {isSignUp && 
            <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            />
          }
          {isSignUp && 
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
            />
          }
        {/* </div> */}

        {/* <div> */}
          <input
            type="text"
            className="infoInput userN-input"
            name="username"
            placeholder="Usernames"
            value={data.username}
            onChange={handleChange}
          />
        {/* </div> */}

        {/* <div> */}
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          {isSignUp && 
            <input
              type="password"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          }
        </div>
        <span
            style={{
              color: "yellow",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
            >
            * Confirm password is not same
        </span>

        <div>
            <span style={{fontSize: '12px', cursor: "pointer", textDecoration: "underline"}} 
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
               >
              { isSignUp ? "Already have an account? Login!" : "Don't have an account? Sign Up"}
            </span>
            <button className="button infoButton" type="submit" disabled={loading}>
              { loading ? "Loading..." : isSignUp ? "Sign up" : "Log In" }
            </button>
        </div>
      </form>
    </div>

    </div>
  );
};


export default Auth;