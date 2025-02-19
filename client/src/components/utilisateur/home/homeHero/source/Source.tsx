import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import articleAleatoir from "../../../../../hook/articleRandom";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import SliderFilmSource from "./sliderFilmSource/SliderFilmSource";
import style from "./source.module.css";

interface Platforme {
  id: number;
  nom: string;
  image: string;
}

interface Article {
  id: number;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_id: number | null;
  univers_numero: number | null;
  categorie: string[];
  moyenne_note: number;
  description: string | null;
}

const Source = () => {
  const [listePlatforme, setListePlatforme] = useState([] as Platforme[]);
  const [platformeSelect, setPlatformeSelect] = useState(0);
  const [allFilmPlatforme, setAllFilmPlatforme] = useState([] as Article[]);

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
        if (data.sucssces) {
          setListePlatforme(articleAleatoir(data.platforme, 7));
        }
      } catch (error) {
        console.error(
          "eurreur l'ore de la récupération de tout les producteur",
        );
      }
    };

    getAllPlatforme();
  }, []);

  const settings = {
    initialSlide: 0,
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
          slidesToShow: 1,
        },
      },
    ],
  };
  //gestion du slide filme de platforme
  const getFilmPlatforme = async (idP: number) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/platforme`,
        {
          headers: {
            "Content-Type": "application/json",
            idP: idP,
          },
        },
      );
      setAllFilmPlatforme(
        articleAleatoir(data.articlePlatforme as Article[], 22).splice(0, 30),
      );
    } catch (error) {
      console.error("eurreur l'ore de la récupération de tout les producteur");
    }
  };

  //gestion de slide platforme
  const handClikePlatforme = (idPlatforme: string | null) => {
    if (idPlatforme === null) return;

    if (Number(idPlatforme) === platformeSelect) {
      setPlatformeSelect(0);
      return;
    }
    setPlatformeSelect(Number(idPlatforme));
    getFilmPlatforme(Number(idPlatforme));
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikePlatforme);

  return (
    <div>
      {listePlatforme.length > 0 && (
        <div className={`slider-container ${style.sliderContainerSource}`}>
          <Slider {...settings}>
            {listePlatforme.map((platforme) => (
              <div key={platforme.id} className={`${style.containerElement}`}>
                <div
                  className={
                    platforme.id === platformeSelect
                      ? `${style.containerImage} ${style.shadowSelect}`
                      : `${style.containerImage}`
                  }
                  data-id={platforme.id}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}/api/image/${platforme.image}`}
                    alt={`platforme ${platforme.nom}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {platformeSelect !== 0 && allFilmPlatforme.length > 0 && (
        <SliderFilmSource allFilmPlatforme={allFilmPlatforme} />
      )}
    </div>
  );
};

export default Source;
