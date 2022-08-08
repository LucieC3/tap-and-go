import React, { useState, useEffect } from "react";
import axios from "axios";

const Itinerary = () => {
  const [value, setvalue] = useState("");
  const [address, setAddress] = useState("");

  const handleInput = (e) => {
    setvalue(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${value}&type=housenumber&autocomplete=1`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setAddress(data);
      });
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Départ"
          onChange={(e) => handleInput(e)}
          value={value}
        />
        <input
          type="text"
          placeholder="Arrivée"
          onChange={(e) => handleInput(e)}
          value={value}
        />
        <button type="button">GO</button>
      </form>
    </div>
  );
};

export default Itinerary;
