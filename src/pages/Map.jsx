import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

// GPS datas of Nantes //
const center = [47.218371, -1.553621];

function Map() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setStations(data);
      });
  }, []);

  // const bikesNumber = stations.map((bike) => bike.available_bikes);

  return (
    <div>
      <Header />
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.position.lat, marker.position.lng]}
          >
            <Link to={`/stations-list/${marker.number}`}>
              <Popup>
                <h3>N° {marker.name}</h3>
                <h4>Vélos disponibles : {marker.available_bikes}</h4>
                <h4>Places disponibles : {marker.available_bike_stands}</h4>
              </Popup>
            </Link>
          </Marker>
        ))}
      </MapContainer>
      <NavBar />
    </div>
  );
}

export default Map;
