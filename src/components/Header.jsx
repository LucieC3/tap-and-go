import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import logo from "../assets/logo-tap-and-go-bis.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo-header" src={logo} alt="vélo lunettes" />
      </Link>
      <h1 className="header-title">Tap And Go</h1>
      <div className="categories-header">
        <div>
          <Link to="/stations-map">
            <h3>Carte</h3>
          </Link>
        </div>
        <div>
          <Link to="/itinerary">
            <h3>Itinéraire</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
