import React, { useState } from "react";
import StationCard from "./StationCard";
import "./styles/SearchBarResults.css";

const SearchBarResults = ({ stations }) => {
  return (
    <div className="search-results">
      <h1 className="title_all-stations">Toutes les stations :</h1>
      <ul>
        {stations
          .filter((station) => station.name.toLowerCase().includes(searchTerm))
          .filter((station) => (onlyOpen ? station.status === "OPEN" : true))
          .filter((station) => station.available_bikes >= bikeQuantity)
          .map((station, index) => (
            <li key={index}>
              <StationCard station={station} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBarResults;
