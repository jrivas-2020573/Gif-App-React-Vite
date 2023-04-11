//Los hooks son las funciones que retornan algo

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    //Manejar el array de las imagenes
    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    //Use efect ejecuta efecto secundario al realizar una acción
    useEffect(() => {
      getImages();
    }, []);
    

    return {
        images
    }
}
