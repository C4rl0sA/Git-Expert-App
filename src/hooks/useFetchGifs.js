import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getGifs(category);
      setImages(response);
      setIsLoading(false);
      //console.log(response);
    })();
  }, []);

  return {
    images,
    isLoading,
  };
};
