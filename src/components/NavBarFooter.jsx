import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { FaListUl } from "react-icons/fa";
import { TbMapPins } from "react-icons/tb";

import "./styles/NavBarFooter.css";

const NavBar = () => {
  return (
    <div className="container-bottom-navbar">
      <div className="container-map-navbar">
        <Link to="/">
          <AiFillHome className="icon home-icon" />
        </Link>
      </div>
      <div className="container-map-navbar">
        <Link to="/stations-map">
          <GrMapLocation className="icon map-icon" />
        </Link>
      </div>
      <div className="container-list-navbar">
        <Link to="/stations-list">
          <FaListUl className="icon list-icon" />
        </Link>
      </div>
      <div className="container-itinerary-navbar">
        <Link to="/itinerary">
          <TbMapPins className="icon itinerary-icon" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
