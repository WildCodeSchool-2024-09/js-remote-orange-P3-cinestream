import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./bntFavorie.module.css";

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

interface BntFavorieProps {
  film5: ArticleSlider[];
  setFilm5: (films: ArticleSlider[]) => void;
  indexSelect: number;
}

const BntFavorie = ({ film5, setFilm5, indexSelect }: BntFavorieProps) => {
  const { token } = UseTokenContext();
  const navigate = useNavigate();

  const definirClass = () => {
    return film5[indexSelect].isFavorie === 0
      ? `${style.bntFavorie}`
      : `${style.bntFavorie} ${style.bntFavorieActive}`;
  };

  //au click sur le bouton
  const handleClickLike = async () => {
    //si pas de token aller sur la page de connexion
    if (!token) {
      navigate("/connection");
      return;
    }

    const values = {
      idA: film5[indexSelect].id,
      token: token,
      favorie: film5[indexSelect].isFavorie,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/utilisateur/details/updateFavorie`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        //mettre a jour le state provenant de la base de donnée pour assuré une synchronisation
        const newFilm5 = [...film5];
        newFilm5[indexSelect] = {
          ...newFilm5[indexSelect],
          isFavorie: data.favorie ? 1 : 0,
        };
        setFilm5(newFilm5);
      }
    } catch (error) {
      console.error("une erreur est survenue l'ore de la mis a jour du like");
    }
  };

  return (
    <div>
      <button
        className={definirClass()}
        type="button"
        onClick={() => handleClickLike()}
      >
        {film5[indexSelect].isFavorie === 0
          ? "🤍 Ajouter aux"
          : "❤️ Retirer des"}{" "}
        favoris
      </button>
    </div>
  );
};

export default BntFavorie;
