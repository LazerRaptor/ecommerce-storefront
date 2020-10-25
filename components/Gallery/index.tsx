import { useState } from "react";
import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";
import Spacer from "../Spacer";

const Gallery = ({ images }) => {
  const [frontImage] = images.filter((img) => img.is_front_image);
  const [activeImage, setActiveImage] = useState(frontImage);
  return (
    <div className="flex">
      <ImageList
        images={images}
        activeImage={activeImage}
        setActiveImage={(e) =>
          setActiveImage(
            images.filter((img) => img.src === e.target.src)[0]
          )
        }
      />
      {images.length > 1 ? <Spacer x="1.5" /> : null}
      <ImageDetail image={activeImage} />
    </div>
  );
};

export default Gallery;
