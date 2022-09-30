import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { LoadingMessage } from "./LoadingMessage";
import  PropTypes from "prop-types";


export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  //console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      <LoadingMessage isLoading={isLoading} />
      <div className="card-grid">
        {images.map((img) => {
          // con el operador spread esparcimos todo el objeto
          // al componente
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}