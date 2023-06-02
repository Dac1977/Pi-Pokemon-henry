import { GET_POKEMON, GET_POKEMONS, GET_TYPES, POST_POKE } from "./actions";

const initialState = {
  pokemons: [],
  pokemon: [],
  allpokemons: [],
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case POST_POKE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
