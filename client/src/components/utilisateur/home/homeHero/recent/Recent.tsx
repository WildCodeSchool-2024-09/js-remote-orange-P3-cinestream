import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./recent.module.css";

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
  categorie: string[];
  moyenne_note: number;
}

const Recent = () => {
  const [listeRecent, setListeRecent] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPlatforme = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/recent`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setListeRecent(data.article);
      } catch (error) {
        console.error("eurreur l'ore de la récupération des filme récent");
      }
    };

    getAllPlatforme();
  }, []);

  const settings = {
    initialSlide: 0, //slide initial
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
    return `|${categorieString.slice(0, -1)}`;
  };

  const handClikeRecent = (id: string | null) => {
    navigate(`/detail/${id}`);
    window.scrollTo(0, 0);
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikeRecent);

  return (
    <>
      {listeRecent.length > 0 && (
        <>
          <p className={`${style.titreRecent}`}>Sorties récentes</p>
          <div className={`slider-container ${style.sliderContainerCategorie}`}>
            <Slider {...settings}>
              {listeRecent.length > 0 &&
                listeRecent.map((element) => (
                  <div className={`${style.containerElement}`} key={element.id}>
                    <div
                      className={`${style.containerImage}`}
                      data-id={element.id}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                    >
                      <img
                        src={
                          element.image
                            ? `${import.meta.env.VITE_API_URL}/uploads/${element.image}`
                            : "/images/404/fondFilmSansImage.png"
                        }
                        alt=""
                      />
                      <p className={`${style.pTitreFilme}`}>{element.nom}</p>
                      <p className={`${style.pNotesType}`}>
                        {definirNotes(Number(element.moyenne_note))}{" "}
                        <span>{definirCategorie(element.categorie)}</span>
                      </p>
                      <div className={`${style.shadowBottum}`} />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
};

export default Recent;
