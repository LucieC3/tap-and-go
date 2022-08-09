import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import StationContext from "../contexts/StationContext";

const Itinerary = () => {
  const { stations, setStations } = useContext(StationContext);

  useEffect(() => {
    axios
      .get(
        "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c"
      )
      .then((response) => response.data)
      .then((data) => {
        setStations(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [start, setStart] = useState("");
  const [startFeatures, setStartFeatures] = useState([]);
  const [startStation, setStartStation] = useState(null);

  const [end, setEnd] = useState("");
  const [endFeatures, setEndFeatures] = useState([]);
  const [endStation, setEndStation] = useState(null);

  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleEnd = (e) => {
    setEnd(e.target.value);
  };

  const searchFeatures = (setter, e) => {
    if (!e.target.value && e.target.value === "") return;

    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${e.target.value}&type=housenumber&autocomplete=1`
      )
      .then((response) => response.data)
      .then((data) => {
        setter(data.features);
      });
  };

  function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  const searchClosestStation = (feature) => {
    let distance = Infinity;
    let closestStation = null;

    for (let index = 0; index < stations.length; index++) {
      const earthRadiusKm = 6371;

      let lat1 = stations[index].position.lat;
      let lon1 = stations[index].position.lng;
      let lat2 = feature.geometry.coordinates[1];
      let lon2 = feature.geometry.coordinates[0];

      const dLat = degreesToRadians(lat2 - lat1);
      const dLon = degreesToRadians(lon2 - lon1);

      lat1 = degreesToRadians(lat1);
      lat2 = degreesToRadians(lat2);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1) *
          Math.cos(lat2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      if (Math.abs(earthRadiusKm * c) < distance) {
        distance = Math.abs(earthRadiusKm * c);
        closestStation = stations[index];
      }
    }
    return closestStation;
  };

  const searchClosestStartStation = (feature) => {
    const closestStation = searchClosestStation(feature);
    setStart(feature.properties.label);
    setStartFeatures([]);
    setStartStation(closestStation);
  };

  const searchClosestEndStation = (feature) => {
    const closestStation = searchClosestStation(feature);
    setEnd(feature.properties.label);
    setEndFeatures([]);
    setEndStation(closestStation);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Départ"
          onBlur={(e) => searchFeatures(setStartFeatures, e)}
          onChange={(e) => handleStart(e)}
          value={start}
        />
        {startStation && (
          <div>{startStation.name + " - " + startStation.address}</div>
        )}
        <ul>
          {startFeatures.map((feature, index) => {
            return (
              <li
                key={index}
                onClick={() => searchClosestStartStation(feature)}
              >
                {feature.properties.label}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Arrivée"
          onBlur={(e) => searchFeatures(setEndFeatures, e)}
          onChange={(e) => handleEnd(e)}
          value={end}
        />
        {endStation && (
          <div>{endStation.name + " - " + endStation.address}</div>
        )}
        <ul>
          {endFeatures.map((feature, index) => (
            <li key={index} onClick={() => searchClosestEndStation(feature)}>
              {feature.properties.label}
            </li>
          ))}
        </ul>
        <button type="button">GO</button>
      </form>
    </div>
  );
};

export default Itinerary;
