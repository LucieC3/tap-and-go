import React from "react";
import { Link } from "react-router-dom";
import "./styles/Station.css";

const StationCard = ({ station }) => {
  return (
    <div className="station-container">
      <Link to={`/stations-list/${station.number}`}>{station.name}</Link>
    </div>
  );
};

export default StationCard;
