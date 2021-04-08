import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('GifExpertApp Tests', () => {
  const wrappper = shallow(<GifExpertApp />);

  test('should Display GifExpertApp properly', () => {
    expect(wrappper).toMatchSnapshot();
  });
});
