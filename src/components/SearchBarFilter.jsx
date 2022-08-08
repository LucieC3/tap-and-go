import React, { useContext, useState } from "react";
import StationCard from "./StationCard";
import Checkbox from "./Checkbox";
import "./styles/SearchBarFilter.css";
import FilterContext from "../contexts/FilterContext";

const SearchBarFilter = ({ className = "" }) => {
  const {
    searchTerm,
    setSearchTerm,
    onlyOpen,
    setOnlyOpen,
    bikeQuantity,
    setBikeQuantity,
  } = useContext(FilterContext);

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
          value={searchTerm}
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
      </div>
    </>
  );
};

export default SearchBarFilter;
