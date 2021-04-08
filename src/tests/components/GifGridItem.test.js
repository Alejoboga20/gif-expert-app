import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem Tests', () => {
  const title = 'testing';
  const url = 'testing';
  let wrappper = shallow(<GifGridItem title={title} url={url} />);

  beforeEach(() => {
    wrappper = shallow(<GifGridItem title={title} url={url} />);
  });

  test('should Display GifGridItem properly', () => {
    expect(wrappper).toMatchSnapshot();
  });

  test('should have a paragraph with title', () => {
    const paragraph = wrappper.find('p').text();
    expect(paragraph).toBe(title);
  });

  test('should have image set by props', () => {
    const image = wrappper.find('img');
    expect(image.props()).toEqual({ src: 'testing', alt: 'testing' });
  });

  test('should have animate__fadeIn Class', () => {
    const div = wrappper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
