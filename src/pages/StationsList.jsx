import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Station from '../components/Station';

const Stations = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        axios
        .get("https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c")
        .then((response) => response.data)
        .then((data) => {
            console.log(data)
            setData(data)
        })
        .catch((err) => {
            setError(err);
          })
      }, []);

      if (error || !Array.isArray(data)) {
        return <p>There was an error loading your data !</p>;
      }
    return (
        <div>
            <ul>
            {data.map((station, index) => (
                <li key={index}>
                <Link to={`/stations/${station.stationNumber}`}>
                <Station station={station} />
                </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Stations;