import React from "react";

import { Card } from "../card/Card";

import "./CardList.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.mosters.map((moster) => (
        <Card key={moster.id} moster={moster} />
      ))}
    </div>
  );
};
