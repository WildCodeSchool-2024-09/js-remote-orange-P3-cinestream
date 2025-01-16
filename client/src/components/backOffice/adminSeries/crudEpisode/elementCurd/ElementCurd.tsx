import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import style from "./elementCurd.module.css";

const ElementCurd = () => {
  return (
    <div className={`${style.contenerElement}`}>
      <div className={`${style.contenerGauche}`}>
        <div className={`${style.contenerImage}`}>
          <img src="/temporaire/film/predator.jpg" alt="icon episode" />
        </div>
        <div className={`${style.contenerInfoEpisode}`}>
          <p className={`${style.nEpisode}`}>Épisode 1</p>
          <p className={`${style.allInfo}`}>S01E01</p>
        </div>
        <p className={`${style.titreEpisode}`}>l'arriver du prédator</p>
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
