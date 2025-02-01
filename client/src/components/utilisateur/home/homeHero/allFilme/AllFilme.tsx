import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import articleAleatoir from "../../../../../hook/articleRandom";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./allFilme.module.css";

interface Article {
  id: number;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: boolean;
  premium: boolean;
  type: string;
  univers_id: number | null;
}

const AllFilme = () => {
  const [listeFilms, setListeFilms] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPlatforme = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/films`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setListeFilms(articleAleatoir(data.article, 58));
      } catch (error) {
        console.error("eurreur l'ore de la récupération des filme récent");
      }
    };

    getAllPlatforme();
  }, []);

  const settings = {
    dots: false, // Désactive les points de navigation
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true, // Active le défilement avec la souris ou le doigt
    swipeToSlide: true, // Permet de scroller vers n'importe quelle position
    draggable: true, // Permet de glisser avec la souris
    focusOnSelect: false, // Empêche la mise au focus des slides
    arrows: true, // Active les flèches
  };

  const handClikeFilms = (id: string | null) => {
    navigate(`/detail/${id}`);
    window.scrollTo(0, 0);
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikeFilms);

  return (
    <>
      <p className={`${style.titreSectionFilme}`}>Films</p>
      <div className={`slider-container ${style.sliderContainerFilme}`}>
        <div>
          <Slider {...settings}>
            {listeFilms.map((film) => (
              <div
                key={film.id}
                data-id={film.id}
                className={`${style.elementCourselle}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <div className={`${style.containerElement}`}>
                  <div className={`${style.containerImage}`}>
                    <img
                      src={`${import.meta.env.VITE_API_URL}/uploads/${film.image_rectangle}`}
                      alt={film.nom}
                    />
                  </div>
                  <div className={`${style.containerInfo}`}>
                    <p className={`${style.titreFilme}`}>{film.nom}</p>
                    <p className={`${style.desciptionFilme}`}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Libero saepe possimus quo labore delectus? Ad accusamus
                      reprehenderit velit non quidem.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AllFilme;
