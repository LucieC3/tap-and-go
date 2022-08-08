import React, { useState } from "react";
import StationCard from "./StationCard";
import Checkbox from "./Checkbox";
import "./styles/SearchBarFilter.css";

const SearchBarFilter = ({ stations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [onlyOpen, setOnlyOpen] = useState(false);
  const [bikeQuantity, setBikeQuantity] = useState(0);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  const handleOnlyOpen = () => {
    setOnlyOpen(!onlyOpen);
  };

  const handleBikeQuantity = (e) => {
    let value = e.target.value;
    setBikeQuantity(value);
  };

  return (
    <>
      <div className="searchbar-container">
        <input
          className="input-searchbar"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Trouver votre station..."
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search-results">
        <Checkbox onClick={handleOnlyOpen} />
        <label>Nombre de vélo dispo</label>
        <input
          type="number"
          onChange={handleBikeQuantity}
          value={bikeQuantity}
        />
        <h1 className="title_all-stations">Toutes les stations :</h1>
        <ul>
          {stations
            .filter((station) =>
              station.name.toLowerCase().includes(searchTerm)
            )
            .filter((station) => (onlyOpen ? station.status === "OPEN" : true))
            .filter((station) => station.available_bikes >= bikeQuantity)
            .map((station, index) => (
              <li key={index}>
                <StationCard station={station} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBarFilter;
