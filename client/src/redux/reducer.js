import { GET_POKEMON, GET_POKEMONS } from "./actions";

const initialState ={
    pokemons:[],
    pokemon: [],
    allpokemons: [],
    types: []      
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POKEMONS:
            return{...state, pokemons: action.payload,  allpokemons: action.payload};
        case GET_POKEMON:
            return{...state, pokemon: action.payload};

        default:
            return {...state};
    }
};

export default rootReducer;