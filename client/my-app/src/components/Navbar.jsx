import React, { useContext } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import { AuthContext } from "../context/authContext";
const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
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
          <Link className="add-blog" to={"/write"}>
            Add Blog
          </Link>
          {/* It will display username in navbar, as we have saved it in local storage and will only show username */}
          <span>{currentUser?.username}</span>
          {/* If their is current user it will logout and redirect it to login page */}
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
