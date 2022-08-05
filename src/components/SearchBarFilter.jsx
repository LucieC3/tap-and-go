import React, { useState } from "react";
import StationCard from "./StationCard";
import Checkbox from "./Checkbox";
import "./styles/SearchBar.css";

const SearchBarFilter = ({ stations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [onlyOpen, setOnlyOpen] = useState(false);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  function handleOnlyOpen() {
    setOnlyOpen(!onlyOpen);
  }

  return (
    <>
      <div className="searchBar">
        <input
          className="input-searchbar"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Trouver votre station..."
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search-results">
        <h1>Toutes les stations :</h1>
        <Checkbox onClick={handleOnlyOpen} />
        <ul>
          {stations
            .filter((station) =>
              station.name.toLowerCase().includes(searchTerm)
            )
            .filter((station) => (onlyOpen ? station.status === "OPEN" : true))
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
