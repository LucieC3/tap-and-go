import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import DesktopList from "../components/DesktopList";
import SearchBarFilter from "../components/SearchBarFilter";
import StationContext from "../contexts/StationContext";
import FilterContext from "../contexts/FilterContext";

// GPS datas of Nantes //
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
    <div>
      <SearchBarFilter />

      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DesktopList stations={stations} />
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
                  <h4>{marker.address}</h4>
                  <h4>Vélos disponibles : {marker.available_bikes}</h4>
                  <h4>Places disponibles : {marker.available_bike_stands}</h4>
                </Popup>
              </Link>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

export default Map;
