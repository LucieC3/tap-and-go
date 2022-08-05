import React from "react";

const Checkbox = ({ label, value, onClick }) => {
  return (
    <div>
      {" "}
      <label>
        <input type="checkbox" checked={value} onClick={onClick} />
        Stations ouvertes uniquement
      </label>
    </div>
  );
};

export default Checkbox;
