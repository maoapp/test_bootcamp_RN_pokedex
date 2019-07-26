import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import List from './PokemonList';

describe('List test suite', () => {
  it('Should render two inline errors', () => {
    const wrapper = shallow(<List />);
    const scrollView = wrapper.find('View');

    console.log(wrapper.debug())

    expect(scrollView.length).toBe(1);
  })
});
