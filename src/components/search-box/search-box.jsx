import React from "react";
import "./search-box.css";

const SerachBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="text"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SerachBox;
