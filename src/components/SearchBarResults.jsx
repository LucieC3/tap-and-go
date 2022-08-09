import React, { useContext } from "react";
import FilterContext from "../contexts/FilterContext";
import StationContext from "../contexts/StationContext";
import StationCard from "./StationCard";
import "./styles/SearchBarResults.css";

const SearchBarResults = () => {
  const { stations } = useContext(StationContext);
  const { onlyOpen, searchTerm, bikeQuantity } = useContext(FilterContext);

  return (
    <div className="search-results">
      <h1 className="title-all-stations">Toutes les stations :</h1>
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
