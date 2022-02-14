import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifGrid from '../../components/GifGrid/GifGrid';

jest.mock('../../hooks/useFetchGifs');
const mockedUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;

const gifs = [
	{
		id: 'ABC',
		url: 'https://localhost.com',
		title: 'Testing',
	},
];

describe('GifGrid Tests', () => {
	const category = 'Avatar';

	test('should be render properly when is loading', () => {
		mockedUseFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show items when images are loaded with useFetchGifs', () => {
		mockedUseFetchGifs.mockReturnValue({ data: gifs, loading: false });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
