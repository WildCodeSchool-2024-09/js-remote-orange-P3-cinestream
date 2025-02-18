import axios from "axios";
import { useEffect, useState } from "react";
import { UseTokenContext } from "../../../../context/tokenContext";
import NavBarre from "../../../commun/navBarre/NavBarre";
import BntFavorie from "./bntFavorie/BntFavorie";
import BntLecture from "./bntLecture/BntLecture";
import DesciptionAnonce from "./desciptionAnonce/DesciptionAnonce";
import style from "./homeHeader.module.css";
import Point from "./point/Point";

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
  description: string | null;
  isFavorie: number;
}

const HomeHeader = () => {
  const [film5, setFilm5] = useState<ArticleSlider[]>([]);

  //géré le scroll
  const [indexSelect, setIndexSelect] = useState(0);
  const { token } = UseTokenContext();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const getAllPlatforme = async () => {
      try {
        //fait une requette différente si l'utilisateur est connecter ou non
        if (!token) {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/presentation5`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          if (data.sucssces) {
            setFilm5(data.presentation5);
          }
        } else {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/utilisateur/caroussel/presentation5Connecter`,
            {
              headers: {
                "Content-Type": "application/json",
                token: token,
              },
            },
          );
          if (data.sucssces) {
            setFilm5(data.presentation5);
          }
        }
      } catch (error) {
        console.error(
          "eurreur l'ore de la récupération des 5 film de presentation",
        );
      }
    };

    getAllPlatforme();
  }, []);

  const changerImage = (number: number | null = null) => {
    if (number === null) {
      setIndexSelect(indexSelect >= 4 ? 0 : indexSelect + 1);
      return;
    }
    setIndexSelect(number);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const intervalId = setInterval(() => {
      changerImage();
    }, 20000);

    return () => clearInterval(intervalId);
  }, [indexSelect]);

  return (
    <div className={`${style.homeHeader}`}>
      <NavBarre />
      {/* fond */}
      <div className={`${style.shadowTop}`} />
      <div className={`${style.contenerImage}`}>
        <img
          className={`${style.banniereFilme}`}
          src={
            film5.length > 0
              ? film5[indexSelect].image_rectangle
                ? `${import.meta.env.VITE_API_URL}/uploads/${film5[indexSelect].image_rectangle}`
                : "/images/404/fondFilmSansImage.png"
              : "#"
          }
          alt="affiche du filme"
        />
      </div>
      <div className={`${style.shadowBottom}`} />
      {/* composant */}
      {film5.length > 0 && (
        <div className={`${style.contenerToueInfo}`}>
          {film5.length > 0 && (
            <DesciptionAnonce filmSelect={film5[indexSelect]} />
          )}
          <div className={`${style.contenerBouton}`}>
            <BntLecture id={film5[indexSelect].id} />
            {token && (
              <BntFavorie
                film5={film5}
                setFilm5={setFilm5}
                indexSelect={indexSelect}
              />
            )}
          </div>
        </div>
      )}
      <Point
        indexSelect={indexSelect}
        changerImage={changerImage}
        film5={film5}
      />
    </div>
  );
};

export default HomeHeader;
