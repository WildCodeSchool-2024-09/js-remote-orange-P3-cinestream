import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./bntFavorie.module.css";

const BntFavorie = () => {
  const { idA } = useParams<{ idA: string }>();
  const { token } = UseTokenContext();
  const navigate = useNavigate();
  const [isFavorie, setIsFavorie] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const getAllEpisode = async () => {
      const values = {
        idA: idA,
        token: token,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/details/getFavorie`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.sucssces) {
          setIsFavorie(data.favorie);
        }
      } catch (error) {
        console.error(
          "une erreur est survenue l'ore de la récupération du like",
        );
      }
    };
    if (token) {
      getAllEpisode();
    }
  }, []);

  //au click sur le bouton
  const handleClickLike = async () => {
    //si pas de token aller sur la page de connexion
    if (!token) {
      navigate("/connection");
      return;
    }
    setIsFavorie(!isFavorie);

    const values = {
      idA: idA,
      token: token,
      favorie: isFavorie,
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
        setIsFavorie(data.favorie);
      }
    } catch (error) {
      console.error("une erreur est survenue l'ore de la mis a jour du like");
    }
  };

  //définir la classe du bouton
  function defClasseBntFavorie() {
    if (isFavorie) {
      return `${style.bntFavorie} ${style.bntFavorieActive}`;
    }
    return `${style.bntFavorie}`;
  }

  //définir lu coeur
  function defClassecoeur() {
    if (!isFavorie) {
      return `${style.icon} ${style.coeurNoir}`;
    }
    return `${style.icon}`;
  }

  return (
    <button
      type="button"
      className={defClasseBntFavorie()}
      onClick={handleClickLike}
    >
      <div className={defClassecoeur()}>
        <svg viewBox="0 0 24 24">
          <title>Favorite Icon</title>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />{" "}
        </svg>
      </div>
      Favoris
    </button>
  );
};
export default BntFavorie;
