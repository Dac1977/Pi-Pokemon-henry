import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";

const urlPokemons = "http://localhost:3001/pokemons/";
export const getPokemons = () => {
  return async function(dispatch) {
    const apiData = await axios.get(
      urlPokemons
      
    );
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};

export const getPokemon = (id) => {
  
  return async function(dispatch) {
    const apiData = await axios.get(
      urlPokemons + id
      
    );
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON, payload: pokemon });
  };
};
