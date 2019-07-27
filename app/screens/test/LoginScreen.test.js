// vendors
import React from 'react';
import { shallow } from 'enzyme';

import LoginScreen from '../LoginScreen';

describe('LoginScreen test suite', () => {
  it('Should render a form component', () => {
    const wrapper = shallow(<LoginScreen />);

    expect(wrapper.length).toBe(1);
  });
});