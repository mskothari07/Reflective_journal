import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginPage">
      <h1>Login</h1>
      <form className="loginForm">
        <input
          required
          className="loginInput"
          type="text"
          placeholder="Enter Your Username"
        />
        <input
          required
          className="loginInput"
          type="password"
          placeholder="Enter Your Password"
        />
        <button className="loginButton">Login</button>
        <p className="loginError">Invalid Login</p>
        {/* redirect to register page  */}
        <span className="newUser">
          New User ? <Link to="/register"> Register Here </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
