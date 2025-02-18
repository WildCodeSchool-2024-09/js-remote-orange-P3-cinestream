import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./topNotes.module.css";

interface ArticleSlider {
  id: number;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_numero: null | number;
  univers_id: null | number;
  categorie: string[];
  moyenne_note: number;
}

const TopNotes = () => {
  const [listeTopNotes, setListeTopNotes] = useState<ArticleSlider[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPlatforme = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/topNotes`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (data.sucssces) {
          setListeTopNotes(data.topNotes);
        }
      } catch (error) {
        console.error(
          "eurreur l'ore de la récupération des filme en top notes",
        );
      }
    };

    getAllPlatforme();
  }, []);

  const settings = {
    initialSlide: 0, //slide initial
    dots: false, // Désactive les points de navigation
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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

  const definirNotes = (note: number) => {
    if (note === 0) return "⭐0";
    return `⭐${Number(note.toFixed(1))}`;
  };

  const definirCategorie = (categorie: string[]) => {
    if (categorie.length === 0) return "";
    let categorieString = "";

    for (const element of categorie) {
      categorieString += ` ${element} ∘`;
    }
    // Retire le dernier caractère
    return `🎞️${categorieString.slice(0, -1)}`;
  };

  //pour le clique controller
  const handClikeTopNotes = (id: string | null) => {
    navigate(`/detail/${id}`);
    window.scrollTo(0, 0);
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikeTopNotes);

  return (
    <>
      {listeTopNotes.length > 0 && (
        <>
          <p className={`${style.titreTopNotes}`}>Les plus populaires</p>
          <div className={`slider-container ${style.sliderContainerTopNotes}`}>
            <div>
              <Slider {...settings}>
                {listeTopNotes.map((element, index) => (
                  <div key={element.id} className={`${style.elementCourselle}`}>
                    <div
                      className={`${style.containerFlex}`}
                      data-id={element.id}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                    >
                      <div className={`${style.containerPlaceFilme}`}>
                        <p className={`${style.PlaceFilme}`}>{index + 1}</p>
                      </div>
                      <div className={`${style.containerImage}`}>
                        <img
                          src={
                            element.image
                              ? `${import.meta.env.VITE_API_URL}/uploads/${element.image}`
                              : "/images/404/fondFilmSansImage.png"
                          }
                          alt={`affiche ${element.nom}`}
                        />
                      </div>
                      <div className={`${style.containerInfo}`}>
                        {element.premium === 1 ? (
                          <p className={`${style.pPrenuime}`}>👑</p>
                        ) : (
                          <p className={`${style.pPrenuimeVide}`}>#</p>
                        )}
                        <p className={`${style.pTitre}`}>{element.nom}</p>
                        <p className={`${style.pType}`}>
                          {definirCategorie(element.categorie)}
                        </p>
                        <p className={`${style.pNotes}`}>
                          {definirNotes(Number(element.moyenne_note))}{" "}
                          <span>| {element.type}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TopNotes;
