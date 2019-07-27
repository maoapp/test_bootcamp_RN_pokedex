// vendors
import React from 'react';
import { shallow } from 'enzyme';

// components
import PokemonDetailScreen from '../PokemonDetailScreen';

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

const mockNavigation = {
  getParam: () => 1,
  navigate: jest.fn(),
  goBack: jest.fn
};

const mockResetPokemonDetail = jest.fn();
const mockFetchPokemonDetail = jest.fn();
const mockLoadingState = {
  pokemonDetail: {
    isloading: true
  },
  fetchPokemonDetail: mockFetchPokemonDetail,
  resetPokemonDetail: mockResetPokemonDetail,
  navigation: mockNavigation
};

const mockSuccesfulState = {
  pokemonDetail: {
    succesful: true,
    data: mockPokemonDetail
  },
  fetchPokemonDetail: mockFetchPokemonDetail,
  resetPokemonDetail: mockResetPokemonDetail,
  navigation: mockNavigation
};

const mockFailureState = {
  pokemonDetail: {
    error: true
  },
  fetchPokemonDetail: mockFetchPokemonDetail,
  resetPokemonDetail: mockResetPokemonDetail,
  navigation: mockNavigation
};

describe('PokemonDetailScreen test suite', () => {
  it('Should render a activity indicator', () => {
    const wrapper = shallow(<PokemonDetailScreen {...mockLoadingState} />);
    const activityIndicator = wrapper.find('ActivityIndicator');
 
    expect(activityIndicator.length).toBe(1);
  });

  it('Should render a pokemonDetailCard', () => {
    const wrapper = shallow(<PokemonDetailScreen {...mockSuccesfulState} />);
    const pokemonDetailCard = wrapper.find('PokemonDetailCard');
 
    expect(pokemonDetailCard.length).toBe(1);
  });

  it('Should render a topbar', () => {
    const wrapper = shallow(<PokemonDetailScreen {...mockSuccesfulState} />);
    const topBar = wrapper.find('TopBar');
 
    expect(topBar.length).toBe(1);
  });
  
  it('Should render a errorState', () => {
    const wrapper = shallow(<PokemonDetailScreen {...mockFailureState} />);
    const errorState = wrapper.find('ErrorState');
 
    expect(errorState.length).toBe(1);
  });

  it('Should reset the state and navigate to back', () => {
    const wrapper = shallow(<PokemonDetailScreen {...mockSuccesfulState} />);
    const instance = wrapper.instance(); 
    jest.spyOn(instance, 'goBack');
    instance.goBack();
 
    expect(mockResetPokemonDetail).toHaveBeenCalled();
  });
});
