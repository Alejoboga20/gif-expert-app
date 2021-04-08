import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem Tests', () => {
  let wrappper = shallow(<GifGridItem />);

  test('should Display GifGridItem properly', () => {
    expect(wrappper).toMatchSnapshot();
  });
});
