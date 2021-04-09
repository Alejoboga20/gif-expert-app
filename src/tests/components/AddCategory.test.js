import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory Tests', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change text input', () => {
    const input = wrapper.find('input');
    const value = 'Hello World';
    input.simulate('change', { target: { value } });
  });

  test('should not send blank category', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
