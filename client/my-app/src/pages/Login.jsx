import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //getting inputs
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null); // setting error

  const navigate = useNavigate(); //after login redirecting to home page

  const handleChange = (e) => {
    //getting input data
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //cancel the default event behavior (browser refresh)
    try {
      await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      // console.log(err);
    }
  };

  console.log(inputs);
  return (
    <div className="loginPage">
      <h1>Login</h1>
      <form className="loginForm">
        <input
          required
          className="loginInput"
          type="text"
          placeholder="Enter Your Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          className="loginInput"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="loginButton">
          Login
        </button>
        {/* show the error on frontend */}
        {err && <p className="loginError">{err}</p>}
        {/* redirect to register page  */}
        <span className="newUser">
          New User ? <Link to="/register"> Register Here </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
