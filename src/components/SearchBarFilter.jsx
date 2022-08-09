import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import FilterContext from "../contexts/FilterContext";

import "./styles/SearchBarFilter.css";

const SearchBarFilter = () => {
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
      <div className="search-options">
        <Checkbox onClick={handleOnlyOpen} />
        <label>Vélos disponibles :</label>
        <input
          className="input-availables-bikes"
          type="number"
          onChange={handleBikeQuantity}
          value={bikeQuantity}
        />
      </div>
    </>
  );
};

export default SearchBarFilter;
