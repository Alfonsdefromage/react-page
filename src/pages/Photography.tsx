import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portfolioImages } from "../data/imagesData";
import "./Photography.css";

const Photography = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="photography">
      <h1>Photography</h1>
      <p>
        My second big passion is photography. Unfortunately, I don’t have as
        much time for it as I’d like, but I still try to take my camera out now
        and then—whether to capture snapshots of the city or take portraits when
        friends ask me. I may not be the best photographer out there, but I’m
        definitely the cheapest… because I don’t charge anything.
      </p>

      <div className="image-box">
        <div className="img-miniatures">
          {portfolioImages.map((image, index) => (
            <img
              key={index}
              src={image.thumbnail}
              alt={`Portfolio ${index + 1}`}
              onClick={() => {
                setOpen(true);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={portfolioImages.map((image) => ({ src: image.source }))}
          index={currentIndex}
        />
      </div>
    </div>
  );
};

export default Photography;
