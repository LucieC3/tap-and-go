import React from "react";
import photoHomeMobile from "../assets/photo-bike-home-mobile.jpg";
import photoHomeDesktop from "../assets/photo-bicycles-home-page.jpg";

import "./styles/Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Roulez en toute tranquillité</h1>
      <img
        className="photo-home-mobile"
        src={photoHomeMobile}
        alt="homme sur un vélo"
      />
      <img
        className="photo-home-desktop"
        src={photoHomeDesktop}
        alt="vélos de ville accrochés à une station"
      />
    </div>
  );
};

export default Home;
