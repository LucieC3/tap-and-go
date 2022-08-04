import React from "react";
import "./styles/Station.css";

const Station = ({ station }) => {
  return (
    <div className="station-container">
      <h1>{station.name}</h1>
    </div>
  );
};

export default Station;
