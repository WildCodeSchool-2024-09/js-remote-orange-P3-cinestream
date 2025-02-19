import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import articleAleatoir from "../../../../../hook/articleRandom";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./categorie.module.css";
import SliderFilmCategorie from "./sliderFilmCategorie/SliderFilmCategorie";

interface Categorie {
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

const Categorie = () => {
  const [listeCategories, setListeCategories] = useState([] as Categorie[]);
  const [categorieSelect, setCategorieSelect] = useState(0);
  const [allFilmCategorie, setAllFilmCategorie] = useState([] as Article[]);

  useEffect(() => {
    const getAllPlatforme = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/categorie/getAll`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (data.sucssces) {
          setListeCategories(articleAleatoir(data.categorie, 6));
        }
      } catch (error) {
        console.error("eurreur l'ore de la récupération de tout les categorie");
      }
    };

    getAllPlatforme();
  }, []);

  const settings = {
    initialSlide: 0, //slide initial
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

  //gestion du slide filme de categorie
  const getAllFilmCategorie = async (idC: number) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/categorie`,
        {
          headers: {
            "Content-Type": "application/json",
            idC: idC,
          },
        },
      );
      if (data.sucssces) {
        setAllFilmCategorie(
          articleAleatoir(data.articleCategorie as Article[], 87).splice(0, 25),
        );
      }
    } catch (error) {
      console.error(
        "eurreur l'ore de la récupération de tout les film de la categorie",
      );
    }
  };

  //gestion de slide liste categorie
  const handClikePlatforme = async (idCategorie: string | null) => {
    if (idCategorie === null) return;

    if (Number(idCategorie) === categorieSelect) {
      setCategorieSelect(0);
      return;
    }
    setCategorieSelect(Number(idCategorie));
    await getAllFilmCategorie(Number(idCategorie));
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikePlatforme);

  return (
    <div>
      {listeCategories.length > 0 && (
        <div className={`slider-container ${style.sliderContainerCategorie}`}>
          <Slider {...settings}>
            {listeCategories.map((categorie) => (
              <div key={categorie.id} className={`${style.containerElement}`}>
                <div
                  className={`${style.containerImage}`}
                  data-id={categorie.id}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}/api/image/${categorie.image}`}
                    alt={`categorie ${categorie.nom}`}
                  />

                  <p
                    className={
                      categorieSelect === categorie.id
                        ? `${style.pType} ${style.pTypeSelect}`
                        : `${style.pType}`
                    }
                  >
                    {categorie.nom}
                  </p>

                  <div
                    className={
                      categorieSelect === categorie.id
                        ? `${style.flouGris} ${style.flouVert}`
                        : `${style.flouGris}`
                    }
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
      {categorieSelect !== 0 && allFilmCategorie.length !== 0 && (
        <SliderFilmCategorie allFilmCategorie={allFilmCategorie} />
      )}
    </div>
  );
};

export default Categorie;
