import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={style.card}>
      {/* <p>image: <img src={props.image} alt=""/></p> */}
      <p>
        image: <img src={props.image} alt={props.name}></img>
      </p>
      <h2>name: {props.name}</h2>
      {/* <p>types: {props.types}</p> */}
      <h2>Types : {props.types} </h2>
    </div>
  );
};

export default Card;
