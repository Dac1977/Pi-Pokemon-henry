import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const POST_POKE = "POST_POKE";
const urlPokemons = "http://localhost:3001/pokemons/";
const urlTypes = "http://localhost:3001/types";
export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get(urlPokemons);
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};

export const getPokemon = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(urlPokemons + id);
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON, payload: pokemon });
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios.get(urlTypes);
    const types = apiData.data;
    dispatch({ type: GET_TYPES, payload: types });
  };
};

export const postPoke = (payload) => {
  return async function (dispatch) {
    const pokedata = (await axios.post(urlPokemons, payload)).data;
    return pokedata;
  };
};
