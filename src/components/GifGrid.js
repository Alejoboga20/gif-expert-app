import React, { useEffect } from 'react';

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=React&limit=10&api_key=U81A19qAgRSt2BXfoSr6MvmVr1OyqhNP';

    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      };
    });
    console.log(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
