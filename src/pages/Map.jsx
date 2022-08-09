import axios from "axios";
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapPin } from "react-icons/fa";
import SearchBarFilter from "../components/SearchBarFilter";
import SearchBarResults from "../components/SearchBarResults";
import StationContext from "../contexts/StationContext";
import FilterContext from "../contexts/FilterContext";

import "./styles/Map.css";

// GPS datas : Nantes //
const center = [47.218371, -1.553621];

function Map() {
  const { stations, setStations } = useContext(StationContext);
  const { searchTerm, onlyOpen, bikeQuantity } = useContext(FilterContext);

  useEffect(() => {
    axios
      .get(
        "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c"
      )
      .then((response) => response.data)
      .then((data) => {
        setStations(data);
      });
  }, []);

  return (
    <div className="map-container">
      <div className="map-search-bar">
        <SearchBarFilter />
        <SearchBarResults />
      </div>

      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations
          .filter((station) => station.name.toLowerCase().includes(searchTerm))
          .filter((station) => (onlyOpen ? station.status === "OPEN" : true))
          .filter((station) => station.available_bikes >= bikeQuantity)
          .map((marker, index) => (
            <Marker
              key={index}
              position={[marker.position.lat, marker.position.lng]}
            >
              <Link to={`/stations-list/${marker.number}`}>
                <Popup>
                  <h3>
                    {marker.name.substr(marker.name.lastIndexOf("-") + 1)}
                  </h3>
                  <h4>
                    <FaMapPin className="point-icon" />
                    {marker.address}
                  </h4>
                  <p>Vélos disponibles : {marker.available_bikes}</p>
                  <p>Places disponibles : {marker.available_bike_stands}</p>
                </Popup>
              </Link>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

export default Map;
