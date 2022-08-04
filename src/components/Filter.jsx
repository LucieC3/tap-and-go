import React, { useState } from "react";

const Filter = () => {
  const [status, setStatus] = useState(null);

  const handleStatus = () => {
    setStatus(status === "OPEN");
  };

  return (
    <div>
      <form>
        <label htmlFor="station-select">
          Filtrer par{" "}
          <select id="station-select">
            <option value="">Toutes les stations</option>
            <option value="open" onClick={handleStatus}>
              Ouvert
            </option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Filter;
