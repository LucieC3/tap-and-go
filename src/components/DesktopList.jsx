import React from "react";
import StationCard from "./StationCard";
import "./styles/DesktopList.css";

const DesktopList = ({ stations }) => {
  return (
    <div className="container_desktop-list">
      <ul>
        {stations.map((station, index) => (
          <li key={index}>
            <StationCard station={station} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopList;
