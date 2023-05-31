import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={style.card}>
      {/* <p>image: <img src={props.image} alt=""/></p> */}

      <img
        src={!props.InDb ? props.image + " " : props.imagen + " "}
        alt={props.name}
      ></img>

      <h2>name: {props.name}</h2>
      {/* <p>types: {props.types}</p> */}
      <h2>Types : {props.types} </h2>
    </div>
  );
};

export default Card;
