import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((images) => setImages(images));
  }, [
    category
  ]); /* Dejar la lista de dependencias vacia hace que el useEffect se ejecute solo la primera vez que reenderizo el componente */

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        <ol>
          {images.map((image) => (
            <GifGridItem key={image.id} {...image} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;
