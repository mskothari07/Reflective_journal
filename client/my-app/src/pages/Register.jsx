import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="registerPage">
      <h1>Register</h1>
      <form className="registerForm">
        <input
          required
          className="registerInput"
          type="text"
          placeholder="Enter Your Username"
        />
        <input
          required
          className="registerInput"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          required
          className="registerInput"
          type="password"
          placeholder="Enter Your Password"
        />
        <button className="registerButton">Register</button>
        <p className="registerError">Invalid Inputs</p>
        {/* redirect to Login page  */}
        <span className="alreadyUser">
          Have a Account ?<Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
