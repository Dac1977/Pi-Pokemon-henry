import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Card = (props) => {
  return (
    <div className={style.card}>
      {/* <p>image: <img src={props.image} alt=""/></p> */}

      <img
        src={!props.image ? props.imagen + " " : props.image + " "}
        alt={props.name}
      ></img>
      <div className="">
        <Link to={`/detail/${props.id}`}>
          <h2 className="">{props.name.toUpperCase()}</h2>
        </Link>
      </div>
      <h2>name: {props.name}</h2>
      {/* <p>types: {props.types}</p> */}
      <h2>Types : {props.types} </h2>
    </div>
  );
};

export default Card;
