import axios from "axios";
import React, { useEffect, useState } from "react";
import DesktopList from "../components/DesktopList";
import SearchBarFilter from "../components/SearchBarFilter";

const StationsList = () => {
  const [stations, setStations] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setStations(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error || !Array.isArray(stations)) {
    return <p>There was an error loading your data !</p>;
  }

  return (
    <div>
      <SearchBarFilter stations={stations} />
    </div>
  );
};

export default StationsList;
