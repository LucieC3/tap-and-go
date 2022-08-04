import axios from "axios";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

// GPS datas of Nantes //
const center = [47.218371, -1.553621];

function MapBis() {
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
            <Popup>
              <h3>{marker.name}</h3>
              <h4>Vélos restants : {marker.available_bikes}</h4>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <NavBar />
    </div>
  );
}

export default MapBis;
