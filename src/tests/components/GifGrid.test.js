import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';

describe('GifGrid Tests', () => {
  const category = 'Avatar';

  test('should be render properly', () => {
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
