import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";

export const getPokemons = () => {
  return async function(dispatch) {
    const apiData = await axios.get(
      "http://localhost:3001/pokemons"
      //"https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};

export const getPokemon = (id) => {
  return async function(dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemons/${id}`
      //"https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON, payload: pokemon });
  };
};