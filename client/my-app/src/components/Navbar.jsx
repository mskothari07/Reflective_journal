import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} className="logo-img" alt="Website Logo" />
        </div>
        <div className="links">
          <Link to={"#"}>Technology</Link>
          <Link to={"#"}>Sports</Link>
          <Link to={"#"}>Software</Link>
          <Link to={"#"}>Politics</Link>
          <Link className="add-blog" to={"#"}>
            Add Blog
          </Link>
          <spam>Username</spam>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
