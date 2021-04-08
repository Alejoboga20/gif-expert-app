import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory Tests', () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change text input', () => {
    const input = wrapper.find('input');
    const value = 'Hello World';
    input.simulate('change', { target: { value } });
  });
});
