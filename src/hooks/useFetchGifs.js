import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

  //TODO:Generar estado para cargar las imagenes
  const [images, setImages] = useState([]);
  // State para manejar el Loading
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false); // cuando cargen la imagenes lo seteo en false
  }

  
  useEffect(() => {
    getImages();
  }, []);


  return {
    images,
    isLoading
  };
}
