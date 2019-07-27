// vendors
import React from 'react';
import { shallow } from 'enzyme';


// components
import PokemonList from './PokemonList';

const mockOnSelectPokemon = jest.fn();
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

describe('Pokemon list test suite', () => {
  const mockProps = {
    pokemons: mockPokemons,
    onSelectPokemon: mockOnSelectPokemon
  }

  it('Should render a flatlist', () => {
    const wrapper = shallow(<PokemonList {...mockProps}/>);
    const flatList = wrapper.find('FlatList');

    expect(flatList.length).toBe(1);
  });

  it('Should renderitem', () => {
    const wrapper = shallow(<PokemonList {...mockProps}/>);
    const pokemonContainer = wrapper.find('FlatList').dive().dive().find('CellRenderer').find('TouchableOpacity');
    const pokemon = mockPokemons[0].url.split('/')[6];

    console.log(pokemonContainer.debug())

    // pokemonContainer.simulate('press');
    // expect(mockOnSelectPokemon).toHaveBeenCalled(pokemon);
  });

});
