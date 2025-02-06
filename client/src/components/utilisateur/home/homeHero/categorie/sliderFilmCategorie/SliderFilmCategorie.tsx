import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../../commun/slider/sliderDefauts.css";
import { useNavigate } from "react-router-dom";
import { sliderClike } from "../../../../../commun/slider/sliderClike";
import style from "./sliderFilmCategorie.module.css";

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

interface SliderFilmCategorieProps {
  allFilmCategorie: Article[];
}

const SliderFilmCategorie = ({
  allFilmCategorie,
}: SliderFilmCategorieProps) => {
  const navigate = useNavigate();

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
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

  //gestion de slide tout les film d'une categorie
  const handClikePlatforme = (idFilmCategorie: string | null) => {
    navigate(`/detail/${idFilmCategorie}`);
    window.scrollTo(0, 0);
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikePlatforme);

  return (
    <>
      <div className={`slider-container ${style.sliderContainerCategorie}`}>
        <Slider {...settings}>
          {allFilmCategorie.map((element) => (
            <div key={element.id} className={`${style.containerElement}`}>
              <div
                className={`${style.containerImage}`}
                data-id={element.id}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${element.image}`}
                  alt={element.nom}
                />
                <p className={`${style.pTitreFilme}`}>{element.nom}</p>
                <p className={`${style.pNotesType}`}>
                  {definirNotes(Number(element.moyenne_note))}{" "}
                  <span> {definirCategorie(element.categorie)}</span>
                </p>
                <div className={`${style.shadowBottum}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderFilmCategorie;
