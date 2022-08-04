import React from "react";
import "./styles/Header.css";
import logo from "../assets/logo-tap-and-go-bis.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo-header" src={logo} alt="vélo lunettes" />
      <h1>TAP AND GO</h1>
    </div>
  );
};

export default Header;
