import React from "react";
import { Link } from "react-router-dom";
import { MdPedalBike } from "react-icons/md";
import "./styles/Station.css";

const StationCard = ({ station }) => {
  return (
    <div className="station-card_container">
      <Link
        className="station-card_content"
        to={`/stations-list/${station.number}`}
      >
        <h2>{station.name}</h2>
        <div className="station-card_available-bikes">
          <MdPedalBike />
          <h3>{station.available_bikes}</h3>
        </div>
      </Link>
    </div>
  );
};

export default StationCard;
