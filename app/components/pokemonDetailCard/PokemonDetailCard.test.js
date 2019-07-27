// Vendors
import React from 'react';
import { shallow } from 'enzyme';

// components
import PokemonDetailCard from './PokemonDetailCard';

jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));

describe('Pokemon Detail card test suite', () => {
  const mockProps = {
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

  it('should render a scrollView', () => {
    const wrapper = shallow(<PokemonDetailCard {...mockProps}/>);
    const scrollView = wrapper.find('ScrollView');

    expect(scrollView.length).toBe(2);
  });

  it('should render two moves', () => {
    const wrapper = shallow(<PokemonDetailCard {...mockProps}/>);
    const scrollView = wrapper.find('ScrollView').at(1);
    const containerMoves = scrollView.find('View');

    expect(containerMoves.length).toBe(2);
  });
});
