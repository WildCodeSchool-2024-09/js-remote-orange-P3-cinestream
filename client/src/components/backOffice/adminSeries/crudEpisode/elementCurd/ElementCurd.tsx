import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import style from "./elementCurd.module.css";

interface ElementCurdProps {
  element: {
    episode_description: string | null;
    episode_id: number;
    episode_image: string | null;
    episode_lien_video: string | null;
    episode_nom: string;
    episode_numero: number;
  };
  saison: {
    saison_id: number;
    saison_numero: number;
  };
}

const ElementCurd = ({ element, saison }: ElementCurdProps) => {
  return (
    <div className={`${style.contenerElement}`}>
      <div className={`${style.contenerGauche}`}>
        <div className={`${style.contenerImage}`}>
          <img src="/temporaire/film/predator.jpg" alt="icon episode" />
        </div>
        <div className={`${style.contenerInfoEpisode}`}>
          <p className={`${style.nEpisode}`}>
            Épisode {element.episode_numero}
          </p>
          <p
            className={`${style.allInfo}`}
          >{`S${String(saison.saison_numero).padStart(2, "0")}E${String(element.episode_numero).padStart(2, "0")}`}</p>
        </div>
        <p className={`${style.titreEpisode}`}>{element.episode_nom}</p>
      </div>
      <div className={`${style.contenerDroite}`}>
        <button className={`${style.bntAction}`} type="button">
          <FaArrowUp className={`${style.iconFleche}`} />
        </button>
        <button className={`${style.bntAction}`} type="button">
          <FaArrowDown className={`${style.iconFleche}`} />
        </button>
        <button className={`${style.bntAction}`} type="button">
          <MdClose className={`${style.iconCroix}`} />
        </button>
      </div>
    </div>
  );
};

export default ElementCurd;
