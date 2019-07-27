// Action types
import {
  REQUEST_POKEMONS,
  REQUEST_POKEMONS_FAILURE,
  REQUEST_POKEMONS_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL,
  REQUEST_POKEMON_DETAIL_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL_FAILURE,
  RESET_POKEMON_DETAIL
} from '../../constants/actionTypes';

// reducers
import pokedexReducer from '../pokedexReducer';

// @constants
import { LIMIT } from '../../constants/constants';

// mocks
const mockInitialState = {
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

const mockPokemons = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  },
  {
    name: 'charmander',
    url: "https://pokeapi.co/api/v2/pokemon/4/"
  }
];

const mockPokemonDetail = {
  name: "bulbasaur",
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  height: 115,
  weight: 200,
  types: [
    {
      type: {
        name: "water"
      }
    }
  ],
  moves: [
    {
      move: {
        name: "water"
      }
    },
    {
      move: {
        name: "swords-dance"
      }
    }
  ]
};

describe('pokedex reducer', () => {
  it('[Defailt case] should render the initial state', () => {
    const expected = mockInitialState;
    expect(pokedexReducer(undefined, {})).toEqual(expected);
  });

  it('[request pokemons] Should request the pokemons', () => {
    const expected = {...mockInitialState, pokemons: { ...mockInitialState.pokemons, isloading: true, error: false, succesful: false}};
    expect(pokedexReducer(mockInitialState, { type: REQUEST_POKEMONS })).toEqual(expected);
  });

  it('[Fetch pokemons succesful] Should fetch the pokemons succesfully', () => {
    const expected = {...mockInitialState, pokemons: { ...mockInitialState.pokemons, data: mockPokemons, isloading: false, error: false, succesful: true}};
    expect(pokedexReducer(mockInitialState, { type: REQUEST_POKEMONS_SUCCESSFUL, payload: mockPokemons, list: LIMIT })).toEqual(expected);
  });

  it('[Fetch pokemons failure] The pokemons fetch should fail', () => {
    const expected = {...mockInitialState, pokemons: { ...mockInitialState.pokemons, isloading: false, error: true, succesful: false}};
    expect(pokedexReducer(mockInitialState, { type: REQUEST_POKEMONS_FAILURE })).toEqual(expected);
  });

  it('[request pokemonDetail] Should request the pokemon detail', () => {
    const expected = {...mockInitialState, pokemonDetail: { ...mockInitialState.pokemonDetail, isloading: true, error: false, succesful: false}};
    expect(pokedexReducer(mockInitialState, { type: REQUEST_POKEMON_DETAIL })).toEqual(expected);
  });

  it('[Fetch pokemons succesful] Should fetch the pokemon detail succesfully', () => {
    const expected = {...mockInitialState, pokemonDetail: { ...mockInitialState.pokemonDetail, data: mockPokemonDetail, isloading: false, error: false, succesful: true}};
    expect(pokedexReducer(mockInitialState, { type: REQUEST_POKEMON_DETAIL_SUCCESSFUL, payload: mockPokemonDetail })).toEqual(expected);
  });

  it('[Fetch pokemons failure] The pokemon detail fetch should fail', () => {
    const expected = {...mockInitialState, pokemonDetail: { ...mockInitialState.pokemonDetail, isloading: false, error: true, succesful: false}};
    expect(pokedexReducer(mockInitialState, { type: REQUEST_POKEMON_DETAIL_FAILURE })).toEqual(expected);
  });

  it('[Reset pokemons detail] should reset the okemon detail state', () => {
    const expected = {...mockInitialState, pokemonDetail: { ...mockInitialState.pokemonDetail, data: null, isloading: false, error: false, succesful: false}};
    expect(pokedexReducer(mockInitialState, { type: RESET_POKEMON_DETAIL })).toEqual(expected);
  });
});
