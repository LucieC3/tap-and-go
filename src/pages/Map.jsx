import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import { Icon } from "leaflet";

const position = [47.2121084631418, -1.55304912932047];

// GPS datas of Nantes //
const center = [47.218371, -1.553621];

function MapBis() {
  return (
    <div>
      <Header />
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <NavBar />
    </div>
  );
}

export default MapBis;
