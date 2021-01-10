import React from "react";

import { Card } from "../card/Card";

import "./CardList.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.ships.map((ship) => (
        <Card key={ship.id} ship={ship} />
      ))}
    </div>
  );
};
