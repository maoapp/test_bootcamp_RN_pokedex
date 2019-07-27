// vendors
import React from 'react';
import { shallow } from 'enzyme';

// component
import TopBar from './TopBar';

const mockBackFunc = jest.fn();


describe('Topbar component test suite', () => {
  const mockProps = {
    title: 'pokemonList', 
    goBack: mockBackFunc, 
    backgroundColor: 'tomato'
  };

  it('should render a title correctly',  () => {
    const wrapper = shallow(<TopBar {...mockProps}/>);
    const text = wrapper.find('Text');

    expect(text.length).toBe(1);
  })

  it('should render the background color from prop', () => {
    const wrapper = shallow(<TopBar {...mockProps}/>);
    
    expect(wrapper.props().style[1].backgroundColor).toBe('tomato');
  })

  it('should render a image correctly',  () => {
    const wrapper = shallow(<TopBar {...mockProps}/>);
    const text = wrapper.find('Image');

    expect(text.length).toBe(1);
  })

  it('should call a back button',  () => {
    const wrapper = shallow(<TopBar {...mockProps}/>);
    const backButton = wrapper.find('TouchableOpacity');

    backButton.simulate('press');
    expect(mockBackFunc).toBeCalled();
  })

});