import { Card } from '@nextui-org/react';

const GifGridItem = ({ title, url }: GifGridItemProps) => {
	return (
		<Card bordered hoverable shadow>
			<Card.Body>
				<Card.Image
					src={url}
					alt={title}
					objectFit='cover'
					width='100%'
					height='10rem'
				></Card.Image>
			</Card.Body>
			<Card.Footer>
				<p>{title}</p>
			</Card.Footer>
		</Card>
	);
};

interface GifGridItemProps {
	title: string;
	url: string;
}

export default GifGridItem;
