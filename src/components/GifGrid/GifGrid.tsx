import React from 'react';
import { Loading, Grid, Text } from '@nextui-org/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifGridItem from '../GifGridItem/GifGridItem';

const GifGrid = ({ category }: GifGridProps) => {
	const { data: images, loading } = useFetchGifs(category);

	if (loading) return <Loading size='lg' />;

	return (
		<>
			<Text h3>{category}</Text>

			<Grid.Container gap={1} justify='center'>
				{React.Children.toArray(
					images.map((image) => (
						<Grid xs={6} sm={4} md={3} lg={2}>
							<GifGridItem key={image.id} {...image} />
						</Grid>
					))
				)}
			</Grid.Container>
		</>
	);
};

interface GifGridProps {
	category: string;
}

export default GifGrid;
