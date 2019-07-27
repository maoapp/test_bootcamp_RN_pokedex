// vendors
import React from 'react';
import { shallow } from 'enzyme';

// Components
import Form from './Form';

const mockNavigation = {
  navigate: jest.fn()
};

const mockOnChangeField = jest.fn();

describe('Form test suite', () => {
  const mockProps = {
    navigation: mockNavigation, 
    email: 'maopro16@hotmail.com', 
    password: '123456', 
    onChangeField: mockOnChangeField
  }

  it('Should render two inputs', () => {
    const wrapper = shallow(<Form {...mockProps}/>);
    const inputs = wrapper.find('TextInput');

    expect(inputs.length).toBe(2);
  })

  it('Should call a navigation when press on the signup button', () => {
    const wrapper = shallow(<Form {...mockProps}/>);
    const button = wrapper.find('TouchableOpacity');

    button.simulate('press');
    expect(mockNavigation.navigate).toBeCalledWith('List');
  });
  
  it('Should change the email correctly', () => {
    const wrapper = shallow(<Form {...mockProps}/>);
    const inputEmail = wrapper.find('TextInput').first();

    inputEmail.simulate('changeText');
    expect(mockOnChangeField).toBeCalled();
  });

  it('Should change the Password correctly', () => {
    const wrapper = shallow(<Form {...mockProps}/>);
    const inputEmail = wrapper.find('TextInput').at(1);

    inputEmail.simulate('changeText');
    expect(mockOnChangeField).toBeCalled();
  });
});
