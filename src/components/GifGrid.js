import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []); /* Dejar la lista de dependencias vacia hace que el useEffect se ejecute solo la primera vez que reenderizo el componente */

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
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </ol>
    </div>
  );
};

export default GifGrid;
