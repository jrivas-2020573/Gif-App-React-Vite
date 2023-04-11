import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const {images} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div>
                {
                    images.map((img) => (
                        <GifGridItem key={img.id}
                            //  title={img.title}
                            //  url={img.url}
                            {...img} //Mandar todas las propiedades de img
                        />
                    ))
                }
            </div>
        </>
    )
}
