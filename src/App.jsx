import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import StationsList from "./pages/StationsList";
import StationDetails from "./pages/StationDetails";
import Itinerary from "./pages/Itinerary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stations-map" element={<Map />} />
        <Route path="/stations-list" element={<StationsList />} />
        <Route path="/stations-list/:number" element={<StationDetails />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </div>
  );
}

export default App;
