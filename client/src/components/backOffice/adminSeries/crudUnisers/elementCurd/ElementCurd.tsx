import axios from "axios";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./elementCurd.module.css";

interface Article {
  date: null | string;
  id: number;
  image: null | string;
  image_rectangle: null | string;
  nom: string;
  premium: number;
  publier: number;
  type: string;
  univers_id: number;
  univers_numero: number;
  description: string;
}

interface ElementCurdProps {
  article: Article;
  updateAllUnivers: () => Promise<void>;
  updateInfoGeneral: () => Promise<boolean>;
}

const ElementCurd = ({
  article,
  updateAllUnivers,
  updateInfoGeneral,
}: ElementCurdProps) => {
  const { token } = UseTokenContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const onClickAction = async (
    e: React.MouseEvent<HTMLButtonElement>,
    action: string,
  ) => {
    e.stopPropagation();

    const values = {
      token: token,
      idA: article.id,
      idU: article.univers_id,
      action: action,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/article/crudUnivers/update`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        updateAllUnivers();
      }
    } catch (error) {
      console.error("eurror pendant la monter / dessente de l'article");
    }
  };

  const onClickSuprimer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const values = {
      token: token,
      idA: article.id,
      idU: article.univers_id,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/article/crudUnivers/del`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        updateAllUnivers();
      }
    } catch (error) {
      console.error("eurror pendant la supression d'un article de univers");
    }
  };

  const onClickDivContenerElement = async () => {
    //si c'est la meme page ne rien faire
    if (Number(id) === article.id) return;

    const saugarder = await updateInfoGeneral();
    if (saugarder) {
      navigate(`/admin/organisation/${article.id}`);
      window.scrollTo(0, 0);
      window.location.reload();
      return;
    }
    //en cas d'erreur l'ore de update on demande a l'utilisateur si il veut quitter sans sauvgarder
    const message =
      "une erreur est survenue l'ore de auto sauvgarde, voulez vous quitter sans sauvgarder ?";
    if (window.confirm(message)) {
      navigate(`/admin/organisation/${article.id}`);
      window.scrollTo(0, 0);
      window.location.reload();
      return;
    }
  };

  return (
    <div
      className={`${style.contenerElement}`}
      onClick={onClickDivContenerElement}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClickDivContenerElement();
        }
      }}
    >
      <div className={`${style.contenerGauche}`}>
        <div className={`${style.contenerImage}`}>
          <img
            src={
              article.image
                ? `${import.meta.env.VITE_API_URL}/uploads/${article.image}`
                : "/images/404/fondFilmSansImage.png"
            }
            alt="icon episode"
          />
        </div>
        <p className={`${style.place}`}>N°{article.univers_numero}</p>
        <div className={`${style.contenerInfo}`}>
          <p className={`${style.titreSerie}`}>{article.nom}</p>
          {article.description && (
            <p className={`${style.desciptionSerie}`}>{article.description}</p>
          )}
        </div>
      </div>
      <div className={`${style.contenerDroite}`}>
        <button
          className={`${style.bntAction}`}
          type="button"
          onClick={(e) => onClickAction(e, "up")}
        >
          <FaArrowUp className={`${style.iconFleche}`} />
        </button>
        <button
          className={`${style.bntAction}`}
          type="button"
          onClick={(e) => onClickAction(e, "down")}
        >
          <FaArrowDown className={`${style.iconFleche}`} />
        </button>
        <button
          className={`${style.bntAction}`}
          type="button"
          onClick={onClickSuprimer}
        >
          <MdClose className={`${style.iconCroix}`} />
        </button>
      </div>
    </div>
  );
};

export default ElementCurd;
