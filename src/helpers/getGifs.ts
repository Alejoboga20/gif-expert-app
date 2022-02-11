import { GifResponse } from '../interface/Gif';

export const getGifs = async (category: string) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=U81A19qAgRSt2BXfoSr6MvmVr1OyqhNP`;

	const response = await fetch(url);
	const { data } = (await response.json()) as GifResponse;

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});

	return gifs;
};
