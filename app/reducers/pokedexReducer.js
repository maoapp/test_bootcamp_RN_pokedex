import {
  REQUEST_POKEMONS,
  REQUEST_POKEMONS_FAILURE,
  REQUEST_POKEMONS_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL,
  REQUEST_POKEMON_DETAIL_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL_FAILURE,
  RESET_POKEMON_DETAIL
} from '../constants/actionTypes';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isLogged: false,
    userInvalid: false
  },
  pokemons: {
    data: [],
    list: 50,
    isloading: false,
    succesful: false,
    error: false
  },
  pokemonDetail: {
    data: null,
    isloading: false,
    succesful: false,
    error: false
  }
};

const pokedexReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_POKEMONS:
      return { 
        ...state, 
        pokemons: {
          ...state.pokemons, 
          isloading: true, 
          error: false, 
          succesful: false
        }
      };
    case REQUEST_POKEMONS_FAILURE:  
      return {
        ...state, 
        pokemons: {
          ...state.pokemons, 
          isloading: false, 
          error: true, 
          succesful: false
        }
      };
    case REQUEST_POKEMONS_SUCCESSFUL:  
      return {
        ...state, 
        pokemons: {
          ...state.pokemons, 
          isloading: false, 
          error: false, 
          succesful: true, 
          data: action.payload,
          list: action.list
        }
      };
    case REQUEST_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: {
          ...state.pokemonDetail, 
          isloading: true, 
          error: false, 
          succesful: false
        }
      };
    case REQUEST_POKEMON_DETAIL_FAILURE:
      return {
        ...state,
        pokemonDetail: {
          ...state.pokemonDetail, 
          isloading: false, 
          error: true, 
          succesful: false
        }
      };
    case REQUEST_POKEMON_DETAIL_SUCCESSFUL:
      return {
        ...state,
        pokemonDetail: {
          ...state.pokemonDetail, 
          isloading: false, 
          error: false, 
          succesful: true,
          data: action.payload
        }
      };
    case RESET_POKEMON_DETAIL: 
      return {
        ...state,
        pokemonDetail: {
          ...state.pokemonDetail, 
          isloading: false, 
          error: false, 
          succesful: false,
          data: null
        }
      }
    default:
      return state;  
  }
};

export default pokedexReducer;
