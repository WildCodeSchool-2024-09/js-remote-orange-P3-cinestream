import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import articleAleatoir from "../../../../../hook/articleRandom";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./allSerie.module.css";

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

const AllSerie = () => {
  const [listeSeries, setListeSeries] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPlatforme = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/series`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setListeSeries(articleAleatoir(data.article, 13));
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

  const handClikeSeries = (id: string | null) => {
    navigate(`/detail/${id}`);
    window.scrollTo(0, 0);
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikeSeries);

  return (
    <>
      <p className={`${style.titreSectionSerise}`}>Series</p>
      <div className={`slider-container ${style.sliderContainerSerie}`}>
        <div>
          <Slider {...settings}>
            {listeSeries.length > 0 &&
              listeSeries.map((serie) => (
                <div
                  key={serie.id}
                  data-id={serie.id}
                  className={`${style.elementCourselle}`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  <div className={`${style.containerElement}`}>
                    <div className={`${style.containerImage}`}>
                      <img
                        src={`${import.meta.env.VITE_API_URL}/uploads/${serie.image_rectangle}`}
                        alt={serie.nom}
                      />
                    </div>
                    <div className={`${style.containerInfo}`}>
                      <p className={`${style.titreFilme}`}>{serie.nom}</p>
                      <p className={`${style.desciptionFilme}`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatum beatae impedit possimus natus tenetur
                        dolor repellendus provident obcaecati cum corporis.
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

export default AllSerie;
