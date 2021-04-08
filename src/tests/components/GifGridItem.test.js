import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem Tests', () => {
  let wrappper = shallow(<GifGridItem />);

  const title = 'testing';
  const url = 'testing';

  beforeEach(() => {
    wrappper = shallow(<GifGridItem title={title} url={url} />);
  });

  test('should Display GifGridItem properly', () => {
    expect(wrappper).toMatchSnapshot();
  });
});
