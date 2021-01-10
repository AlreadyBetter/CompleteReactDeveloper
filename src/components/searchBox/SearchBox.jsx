import React from "react";

import "./SearchBox.css";

export const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <input className="search" type="search" placeholder={placeHolder} onChange={handleChange} />
  );
};