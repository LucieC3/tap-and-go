import React, { useState } from "react";
import StationCard from "./StationCard";
import "./styles/SearchBar.css";

const SearchBar = ({ stations }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search_results">
        <ul>
          {stations
            .filter((station) =>
              station.name.toLowerCase().includes(searchTerm)
            )
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

export default SearchBar;
