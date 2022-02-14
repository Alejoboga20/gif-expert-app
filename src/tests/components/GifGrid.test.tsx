import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifGrid from '../../components/GifGrid/GifGrid';

jest.mock('../../hooks/useFetchGifs');
const mockedUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;

describe('GifGrid Tests', () => {
	const category = 'Avatar';

	test('should be render properly', () => {
		mockedUseFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show items when images are loaded with useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost.com',
				title: 'Testing',
			},
		];

		mockedUseFetchGifs.mockReturnValue({ data: gifs, loading: false });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
