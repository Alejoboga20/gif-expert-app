import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory Tests', () => {
  const setCategories = jest.fn();
  const value = 'Hello World';
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
    input.simulate('change', { target: { value } });
  });

  test('should not set blank input', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean inputValue', () => {
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
