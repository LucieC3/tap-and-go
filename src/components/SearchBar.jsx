import axios from "axios";
import React, { useEffect, useState } from "react";
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
        console.log(data);
        setDatas(data);
      });
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  // console.log(searchTerm);

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
        {datas
          .filter((stat) => stat.name.toLowerCase().includes(searchTerm))
          .filter((stat) => stat.status === "OPEN" && stat.available_bikes > 3)
          .map((stat, index) => {
            return <div className="search_result" key={index}></div>;
          })}
      </div>
    </>
  );
};

export default SearchBar;
