import axios from "axios";
import { useState, useContext } from "react";
import StationContext from "../contexts/StationContext";

export const getStations = () => {
  const [setStations] = useContext(StationContext);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=0755767fea34480e5e7bd38aad7b7468972dcc7c"
      )
      .then((response) => response.data)
      .then((data) => {
        setStations(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error || !Array.isArray(stations)) {
    return <p>There was an error loading your data !</p>;
  }
};

export const getStation = () => {
  const [setStation] = useContext(StationContext);
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
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Patience...</h1>;
};

export default ApiCalls;
