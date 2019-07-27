// vendors
import React from 'react';
import { shallow } from 'enzyme';

import PokemonListScreen from '../PokemonListScreen';

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

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn()
};

const mockFethPokemons = jest.fn();
const mockLoadingState = {
  pokemons: {
    isloading: true
  },
  fetchPokemons: mockFethPokemons,
  navigation: mockNavigation
};

const mockSuccesfulState = {
  pokemons: {
    succesful: true,
    data: mockPokemons
  },
  fetchPokemons: mockFethPokemons,
  navigation: mockNavigation
};

const mockFailureState = {
  pokemons: {
    error: true
  },
  fetchPokemons: mockFethPokemons,
  navigation: mockNavigation
};

describe('PokemonListScreen test suite', () => {
  it('Should render a activity indicator', () => {
    const wrapper = shallow(<PokemonListScreen {...mockLoadingState} />);
    const activityIndicator = wrapper.find('ActivityIndicator');
 
    expect(activityIndicator.length).toBe(1);
  });

  it('Should render a pokemonList', () => {
    const wrapper = shallow(<PokemonListScreen {...mockSuccesfulState} />);
    const pokemonList = wrapper.find('List');
 
    expect(pokemonList.length).toBe(1);
  });

  it('Should render a topbar', () => {
    const wrapper = shallow(<PokemonListScreen {...mockSuccesfulState} />);
    const topBar = wrapper.find('TopBar');
 
    expect(topBar.length).toBe(1);
  });

  it('Should goBack when tap in the topbar arrow', () => {
    const wrapper = shallow(<PokemonListScreen {...mockSuccesfulState} />);
    const topBar = wrapper.find('TopBar');
    topBar.props().goBack();
 
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('Should render a errorState', () => {
    const wrapper = shallow(<PokemonListScreen {...mockFailureState} />);
    const errorState = wrapper.find('ErrorState');
 
    expect(errorState.length).toBe(1);
  });

  it('onSelect pokemon has been called', () => {
    const wrapper = shallow(<PokemonListScreen {...mockSuccesfulState} />);
    const instance = wrapper.instance(); 
    jest.spyOn(instance, 'onSelectPokemon');
    instance.onSelectPokemon();
    expect(instance.onSelectPokemon).toHaveBeenCalled();
  })
});