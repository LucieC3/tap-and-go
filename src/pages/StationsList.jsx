import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DesktopList from "../components/DesktopList";
import SearchBarFilter from "../components/SearchBarFilter";
import SearchBarResults from "../components/SearchBarResults";
import StationContext from "../contexts/StationContext";

const StationsList = () => {
  const { stations, setStations } = useContext(StationContext);
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

  console.log("StationsList", { stations });

  if (error || !Array.isArray(stations)) {
    return <p>There was an error loading your data !</p>;
  }

  return (
    <div>
      <SearchBarFilter />
      <SearchBarResults />
    </div>
  );
};

export default StationsList;
