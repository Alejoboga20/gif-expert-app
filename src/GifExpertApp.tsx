import { useState } from 'react';
import { Text } from '@nextui-org/react';
import { AddCategory } from './components/AddCategory/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }: GifExpertAppProps) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<div>
			<Text h2>Gif Expert App</Text>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</div>
	);
};

interface GifExpertAppProps {
	defaultCategories?: string[];
}

export default GifExpertApp;
