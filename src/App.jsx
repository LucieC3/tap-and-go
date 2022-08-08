import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBarFooter from "./components/NavBarFooter";
import Home from "./pages/Home";
import Map from "./pages/Map";
import StationsList from "./pages/StationsList";
import StationDetails from "./pages/StationDetails";
import Itinerary from "./pages/Itinerary";
import "./App.css";
import FilterContext from "./contexts/FilterContext";
import StationContext from "./contexts/StationContext";

function App() {
  return (
    <FilterContext.Provider>
      <StationContext.Provider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stations-map" element={<Map />} />
            <Route path="/stations-list" element={<StationsList />} />
            <Route path="/stations-list/:number" element={<StationDetails />} />
            <Route path="/itinerary" element={<Itinerary />} />
          </Routes>
          <NavBarFooter />
        </div>
      </StationContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
