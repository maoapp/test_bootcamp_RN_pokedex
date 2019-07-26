// @vendors
import axios from 'axios';
import isEqual from 'lodash/isEqual';

// @actiontypes
import {
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER,
  REQUEST_POKEMONS,
  REQUEST_POKEMONS_FAILURE,
  REQUEST_POKEMONS_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL,
  REQUEST_POKEMON_DETAIL_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL_FAILURE,
  RESET_POKEMON_DETAIL,
} from '../constants/actionTypes';

// @constants
import { API_URL, ENDPOINTS, LIMIT } from '../constants/constants';

const registerUser = user => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: user
  })
}

const loginSuccesful = () => ({
  type: LOGIN_USER_SUCCESSFUL
});

const loginFailure = () => ({
  type: LOGIN_USER_FAILURE
});

const loginRequest = userData => (dispatch, getState) => {
  const { user } = getState().pokedexReducer;
  const userRegistered = {
    email: user.email,
    password: user.password
  };

  if(isEqual(userRegistered, userData)) {
    dispatch(loginSuccesful())
  } else {
    dispatch(loginFailure())
  }
};

const logout = () => dispatch => dispatch({type: LOGOUT_USER});

const fetchPokemons = (pag = LIMIT) => dispatch => {
	const { POKEMONS } = ENDPOINTS;
	const url = `${API_URL}/${POKEMONS}?limit=${pag}`;

	dispatch(pokemonsRequest());
  axios.get(url)
		.then(res => dispatch(pokemonsRequestSuccesful(res.data.results, pag)))
		.catch(() => dispatch(pokemonsRequestFailure()));
};

const pokemonsRequest = () => ({
	type: REQUEST_POKEMONS
});

const pokemonsRequestFailure = () => ({
	type: REQUEST_POKEMONS_FAILURE
});

const pokemonsRequestSuccesful = (data, list) => ({
  type: REQUEST_POKEMONS_SUCCESSFUL,
  payload: data,
  list
});

const fetchPokemonDetail = index => dispatch => {
	const { POKEMON_DETAIL } = ENDPOINTS;
  const url = `${API_URL}/${POKEMON_DETAIL}`;
  const urlApi = url.replace('{index}', index);
  console.log(url, 'call', index, urlApi)

	dispatch(pokemonDetailsRequest());
	axios.get(urlApi)
		.then(res => {
      const pokemonDetail = res.data;
      dispatch(pokemonDetailsRequestSuccesful(pokemonDetail))

      console.log(pokemonDetail, 'respuesta')
    })
		.catch(() => dispatch(pokemonDetailsRequestFailure()));
};

const pokemonDetailsRequest = () => ({
	type: REQUEST_POKEMON_DETAIL
});

const pokemonDetailsRequestFailure = () => ({
	type: REQUEST_POKEMON_DETAIL_FAILURE
});

const pokemonDetailsRequestSuccesful = data => ({
  type: REQUEST_POKEMON_DETAIL_SUCCESSFUL,
  payload: data
});

const resetPokemonDetail = () => ({
  type: RESET_POKEMON_DETAIL
});

export {
  fetchPokemons,
  fetchPokemonDetail,
  loginRequest,
  logout,
  registerUser,
  resetPokemonDetail
}
