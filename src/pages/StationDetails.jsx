import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StationDetails = () => {
    const [stationDetails, setStationDetails] = useState([]);
    const { stationNumber } = useParams();

    useEffect(() => {
        axios
        .get(`https://api.jcdecaux.com/vls/v3/stations/${stationNumber}?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c`)
        .then((response) => response.data)
        .then((data) => {
            console.log(data)
            setStationDetails(data)
        })
      }, [stationNumber]);


    return (
        <div>
            <h1>{stationDetails.name}</h1>
            <h3>{stationDetails.address}</h3>
            <h3>{stationDetails.status}</h3>
            <h3>{stationDetails.banking}</h3>
            <h3>{stationDetails.overflow}</h3>
            <h3>{stationDetails.totalStands.availabilities.bikes}</h3>
            <h3>{stationDetails.totalStands.availabilities.stands}</h3>
            <h3>{stationDetails.totalStands.capacity}</h3>
            <h4>{stationDetails.lastUpdate}</h4>
        </div>
    );
};

export default StationDetails;