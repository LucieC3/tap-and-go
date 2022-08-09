import React from "react";

import "./styles/Checkbox.css";

const Checkbox = ({ value, onClick }) => {
  return (
    <div className="checkbox-container">
      <label>
        <input
          className="input-checkbox"
          type="checkbox"
          checked={value}
          onClick={onClick}
        />
        Stations ouvertes uniquement
      </label>
    </div>
  );
};

export default Checkbox;
