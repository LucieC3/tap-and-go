import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StationDetails = () => {
  const [station, setStation] = useState([]);
  const { number } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.jcdecaux.com/vls/v3/stations/${number}?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setStation(data);
      });
  }, [number]);

  return (
    <div>
      {station.name}
      {station.address}
      {station.status}
    </div>
  );
};

export default StationDetails;
