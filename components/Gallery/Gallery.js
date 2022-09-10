import GalleryCart from "./GalleryCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
function Gallery() {
  useEffect(() => {
    let timer = 1000;
    const interval = setInterval(() => {
      timer = timer + 1000;
      timer > 9000 ? slideLeft() : slideRight();
      if (timer > 18000) {
        timer = 1000;
      }
    }, timer);

    return () => clearInterval(interval);
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className="bg-secondary py-[120px]">
      <section className="overflow-hidden text-gray-700">
        <div className=" flex  items-center">
          <div className="text-3xl p-2 ">
            <FontAwesomeIcon onClick={slideLeft} icon={faArrowCircleLeft} />
          </div>

          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
          >
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/grid_gal1.jpg"
              name="Latte"
            />
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/grid_gal2-900x601.jpg"
              name="Cappucino"
            />
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/grid_gal3.jpg"
              name="Iced Coffe"
            />
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/latest_blog1-900x600.jpg"
              name="Latte"
            />
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/grid_gal5.jpg"
              name="Coffee"
            />
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/grid_gal2-900x601.jpg"
              name="Cappucino"
            />
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/grid_gal3.jpg"
              name="Iced Coffe"
            />
            <GalleryCart
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/latest_blog1-900x600.jpg"
              name="Latte"
            />
          </div>
          <div className="text-3xl p-2">
            <FontAwesomeIcon onClick={slideRight} icon={faArrowCircleRight} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
