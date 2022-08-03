import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import StationsList from "./pages/StationsList";
import StationDetails from "./pages/StationDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stations" element={<StationsList />} />
          <Route path="/stations/:number" element={<StationDetails />} />
      </Routes>
    </div>
  );
}

export default App;
