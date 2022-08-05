import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "./styles/StationDetails.css";

const StationDetails = () => {
  const [station, setStation] = useState([]);
  const [loading, setLoading] = useState(true);
  const { number } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.jcdecaux.com/vls/v3/stations/${number}?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setStation(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Patience...</h1>;

  return (
    <div>
      <Header />
      <div className="station-details-container">
        <div className="station-details-header">
          <h1>N°{station.name}</h1>
          <h2>{station.address}</h2>
        </div>
        <div className="station-details-main">
          <div className="station-availabilities">
            <h3>
              Vélos disponibles : {station.totalStands.availabilities.bikes}
            </h3>
            <h3>
              Places disponibles : {station.totalStands.availabilities.stands}
            </h3>
          </div>
          <h3>
            {" "}
            <MdPayment /> {station.banking ? <AiOutlineCheck /> : <ImCross />}
          </h3>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default StationDetails;
