import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem/GifGridItem';

const title = 'testing';
const url = 'testing';

const benchImg = {
	alt: 'testing',
	className: 'nextui-c-kbhVdb nextui-c-kbhVdb-ieCSSFU-css nextui-image',
	'data-state': 'loading',
	height: '10rem',
	src: 'testing',
	width: '100%',
};

describe('GifGridItem Tests', () => {
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
		const wrappper = mount(<GifGridItem title={title} url={url} />);
		const image = wrappper.find('img');
		expect(image.props()).toMatchObject(benchImg);
	});

	test('should have animate__fadeIn Class', () => {
		const wrappper = mount(<GifGridItem title={title} url={url} />);
		expect(wrappper).toMatchSnapshot();
		const div = wrappper.find('div').at(0);
		const className = div.prop('className');
		expect(className.includes('nextui')).toBe(true);
	});
});
