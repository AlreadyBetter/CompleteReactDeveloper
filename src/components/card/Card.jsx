import React from "react";

import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="moster"
        src={`https://robohash.org/${props.moster.id}?set=set2&size=240x180`}
      />
      <h2>{props.moster.name}</h2>
      <p>{props.moster.email}</p>
    </div>
  );
};
