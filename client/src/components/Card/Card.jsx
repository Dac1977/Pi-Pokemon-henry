import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={style.card}>
      {/* <p>image: <img src={props.image} alt=""/></p> */}
      <p>image: <img src={props.image} alt = {props.name}></img></p>
      <p>name: {props.name}</p>
      <p>types: {props.types}</p>
    </div>
  );
};

export default Card;