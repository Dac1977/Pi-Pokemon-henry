import React from 'react';
import Card from '../Card/Card';
import style from "./CardsContainer.module.css"
import { useSelector } from 'react-redux';

const CardsContainer = () => {
  //  const pokemons = [
  //       {
  //           "id": 1,
  //           "name": "bulbasaur",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  //           "hp": 45,
  //           "attack": 49,
  //           "defense": 49,
  //           "speed": 45,
  //           "height": 7,
  //           "weight": 69,
  //           "types": [
  //               "grass",
  //               "poison"
  //           ]
  //       },
  //       {
  //           "id": 2,
  //           "name": "ivysaur",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
  //           "hp": 60,
  //           "attack": 62,
  //           "defense": 63,
  //           "speed": 60,
  //           "height": 10,
  //           "weight": 130,
  //           "types": [
  //               "grass",
  //               "poison"
  //           ]
  //       },
  //       {
  //           "id": 3,
  //           "name": "venusaur",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
  //           "hp": 80,
  //           "attack": 82,
  //           "defense": 83,
  //           "speed": 80,
  //           "height": 20,
  //           "weight": 1000,
  //           "types": [
  //               "grass",
  //               "poison"
  //           ]
  //       },
  //       {
  //           "id": 4,
  //           "name": "charmander",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
  //           "hp": 39,
  //           "attack": 52,
  //           "defense": 43,
  //           "speed": 65,
  //           "height": 6,
  //           "weight": 85,
  //           "types": [
  //               "fire"
  //           ]
  //       },
  //       {
  //           "id": 5,
  //           "name": "charmeleon",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
  //           "hp": 58,
  //           "attack": 64,
  //           "defense": 58,
  //           "speed": 80,
  //           "height": 11,
  //           "weight": 190,
  //           "types": [
  //               "fire"
  //           ]
  //       },
  //       {
  //           "id": 6,
  //           "name": "charizard",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
  //           "hp": 78,
  //           "attack": 84,
  //           "defense": 78,
  //           "speed": 100,
  //           "height": 17,
  //           "weight": 905,
  //           "types": [
  //               "fire",
  //               "flying"
  //           ]
  //       },
  //       {
  //           "id": 7,
  //           "name": "squirtle",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
  //           "hp": 44,
  //           "attack": 48,
  //           "defense": 65,
  //           "speed": 43,
  //           "height": 5,
  //           "weight": 90,
  //           "types": [
  //               "water"
  //           ]
  //       },
  //       {
  //           "id": 8,
  //           "name": "wartortle",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
  //           "hp": 59,
  //           "attack": 63,
  //           "defense": 80,
  //           "speed": 58,
  //           "height": 10,
  //           "weight": 225,
  //           "types": [
  //               "water"
  //           ]
  //       },
  //       {
  //           "id": 9,
  //           "name": "blastoise",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
  //           "hp": 79,
  //           "attack": 83,
  //           "defense": 100,
  //           "speed": 78,
  //           "height": 16,
  //           "weight": 855,
  //           "types": [
  //               "water"
  //           ]
  //       },
  //       {
  //           "id": 10,
  //           "name": "caterpie",
  //           "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
  //           "hp": 45,
  //           "attack": 30,
  //           "defense": 35,
  //           "speed": 45,
  //           "height": 3,
  //           "weight": 29,
  //           "types": [
  //               "bug"
  //           ]
  //       },
  //       {
  //           "name": "diego",
  //           "id": "d290456d-e764-4963-8a4d-3dae838062f4",
  //           "hp": 9,
  //           "attack": 10,
  //           "defense": 100,
  //           "speed": 98,
  //           "height": 180,
  //           "weigth": null,
  //           "img": null,
  //           "InDb": true,
  //           "createdAt": "2023-05-18T14:02:06.019Z",
  //           "updatedAt": "2023-05-18T14:02:06.019Z",
  //           "Types": [
  //               {
  //                   "name": "normal"
  //               },
  //               {
  //                   "name": "poison"
  //               },
  //               {
  //                   "name": "ice"
  //               }
  //           ]
  //       }
  //  ];
    const pokemons = useSelector(state => state.pokemons);
    
  return (
    <div className={style.container}>
        {pokemons.map(pokemon => {
            return (<Card
                image={pokemon.image}
                name={pokemon.name}
                types={pokemon.types}
            />)
        })};
      <p>
        este componente debe tomar un array de usuarios, y por cada pokemon,
        renderizar un componente card.
        
      </p>
    </div>
  );
};

export default CardsContainer;
