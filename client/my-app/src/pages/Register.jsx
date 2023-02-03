import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  //getting inputs
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null); // setting error

  const navigate = useNavigate(); //after register redirecting to login page

  const handleChange = (e) => {
    //getting input data
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //cancel the default event behavior (browser refresh)
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // console.log(inputs);

  return (
    <div className="registerPage">
      <h1>Register</h1>
      <form className="registerForm">
        <input
          required
          className="registerInput"
          type="text"
          placeholder="Enter Your Username"
          onChange={handleChange}
          name="username"
        />
        <input
          required
          className="registerInput"
          type="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          name="email"
        />
        <input
          required
          className="registerInput"
          type="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleSubmit} className="registerButton">
          Register
        </button>
        {/* show the error on frontend */}
        {err && <p className="registerError">{err}</p>}
        {/* redirect to Login page  */}
        <span className="alreadyUser">
          Have a Account ?<Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
