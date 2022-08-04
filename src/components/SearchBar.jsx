import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Station from "./Station";
import "./styles/SearchBar.css";

const SearchBar = () => {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c"
      )
      .then((response) => response.data)
      .then((data) => {
        setDatas(data);
      });
  }, []);

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
          {datas
            .filter((station) =>
              station.name.toLowerCase().includes(searchTerm)
            )
            .map((station, index) => {
              return (
                <li key={index}>
                  <Link to={`/stations-list/${station.number}`}>
                    <Station station={station} />
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
