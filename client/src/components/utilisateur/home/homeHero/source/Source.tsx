import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./source.module.css";

interface Platforme {
  id: number;
  nom: string;
  image: string;
}

const Source = () => {
  const [listePlatforme, setListePlatforme] = useState([] as Platforme[]);

  useEffect(() => {
    const getAllPlatforme = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/platforme/getAll`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setListePlatforme(data.platforme);
      } catch (error) {
        console.error(
          "eurreur l'ore de la récupération de tout les producteur",
        );
      }
    };

    getAllPlatforme();
  }, []);

  const settings = {
    dots: false, // Désactive les points de navigation
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipe: true, // Active le défilement avec la souris ou le doigt
    swipeToSlide: true, // Permet de scroller vers n'importe quelle position
    draggable: true, // Permet de glisser avec la souris
    focusOnSelect: false, // Empêche la mise au focus des slides
    arrows: true, // Active les flèches
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
    ],
  };

  const handClikePlatforme = () => {};

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikePlatforme);

  return (
    <div className={`slider-container ${style.sliderContainerSource}`}>
      <Slider {...settings}>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_canal+.png" alt="" />
          </div>
        </div>

        {listePlatforme.map((platforme) => (
          <div
            key={platforme.id}
            className={`${style.containerElement}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div className={`${style.containerImage}`}>
              <img
                src={`${import.meta.env.VITE_API_URL}/api/image/${platforme.image}`}
                alt={`platforme ${platforme.nom}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Source;
