import "./NavbarStyles.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-onepay.png"
import loginicon from "../../assets/log-in-icon.png"
// import whitelogo from "../../assets/logo-onepay-whiteblack.jpeg"
// import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="navbar">

      <div className={color ? "header header-bg" : "header"}>
        <Link className="text-link" to="/">
          <div className="logo">
            <img src={logo} alt="OnePay Logo"/>
          </div>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="text-link" to="/Home">
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link className="text-link" to="/Login">
              <span>Services</span>
            </Link>
          </li>

          <li>
            <Link className="text-link" to="/">
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link className="text-link" to="/">
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <Link to="/Login">
          <button className="login-btn-nav">
            Sign In <img src={loginicon} alt="" />
          </button>
        </Link>

        {/* <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div> */}
      </div>
    </div>
    
  );
};
