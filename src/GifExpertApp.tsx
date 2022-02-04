import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }: GifExpertAppProps) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<div>
			<h2>Gif Expert App</h2>
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