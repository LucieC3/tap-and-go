import React from "react";
import { Link } from "react-router-dom";
import { MdPedalBike } from "react-icons/md";
import "./styles/StationCard.css";

const StationCard = ({ station }) => {
  return (
    <div className="station-card_container">
      <Link
        className="station-card_content"
        to={`/stations-list/${station.number}`}
      >
        <h2>{station.name.substr(station.name.lastIndexOf("-") + 1)}</h2>
        <div className="station-card_available-bikes">
          <h3
            className={station.available_bikes >= 3 ? null : "not-enough-bikes"}
          >
            <MdPedalBike />
            {station.available_bikes}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default StationCard;
