import axios from "axios";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
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
}

interface ElementCurdProps {
  article: Article;
  updateAllUnivers: () => Promise<void>;
}

const ElementCurd = ({ article, updateAllUnivers }: ElementCurdProps) => {
  const { token } = UseTokenContext();

  const onClickAction = async (action: string) => {
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

  const onClickSuprimer = async () => {
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

  return (
    <div className={`${style.contenerElement}`}>
      <div className={`${style.contenerGauche}`}>
        <div className={`${style.contenerImage}`}>
          <img
            src={
              article.image
                ? `${import.meta.env.VITE_API_URL}/uploads/${article.image}`
                : "/public/images/404/image404.jpg"
            }
            alt="icon episode"
          />
        </div>
        <p className={`${style.place}`}>N°{article.univers_numero}</p>
        <div className={`${style.contenerInfo}`}>
          <p className={`${style.titreSerie}`}>{article.nom}</p>
          <p className={`${style.desciptionSerie}`}>
            un film ou le perssonage principal est un veritable proffesionel de
            espoionnage et ne fait jamais de betise il est iréropchable et tout
            le monde s'en rend compte tellement il est fort
          </p>
        </div>
      </div>
      <div className={`${style.contenerDroite}`}>
        <button
          className={`${style.bntAction}`}
          type="button"
          onClick={() => onClickAction("up")}
        >
          <FaArrowUp className={`${style.iconFleche}`} />
        </button>
        <button
          className={`${style.bntAction}`}
          type="button"
          onClick={() => onClickAction("down")}
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
