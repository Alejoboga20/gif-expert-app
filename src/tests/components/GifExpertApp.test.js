import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('GifExpertApp Tests', () => {
  let wrappper = shallow(<GifExpertApp />);

  test('should Display GifExpertApp properly', () => {
    expect(wrappper).toMatchSnapshot();
  });

  test('should show a list of categories', () => {
    const categories = ['Avatar', 'Lord Of Rings'];
    wrappper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrappper).toMatchSnapshot();
    expect(wrappper.find('GifGrid').length).toBe(categories.length);
  });
});
