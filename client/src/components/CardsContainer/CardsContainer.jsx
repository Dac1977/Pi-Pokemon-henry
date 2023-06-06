import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className={style.container}>
      {pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            image={!pokemon.InDb ? pokemon.image + " " : pokemon.img + " "}
            name={pokemon.name}
            types={!pokemon.InDb ? pokemon.types + " " : pokemon.Types + " "}
          />
        );
      })}
      ;
    </div>
  );
};

export default CardsContainer;
