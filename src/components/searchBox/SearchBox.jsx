import React from "react";

export const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <input type="search" placeholder={placeHolder} onChange={handleChange} />
  );
};
