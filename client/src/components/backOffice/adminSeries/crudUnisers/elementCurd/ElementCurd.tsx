import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import style from "./elementCurd.module.css";

const ElementCurd = () => {
  return (
    <div className={`${style.contenerElement}`}>
      <div className={`${style.contenerGauche}`}>
        <div className={`${style.contenerImage}`}>
          <img src="/temporaire/JhonnyEnglish.jpg" alt="icon episode" />
        </div>
        <p className={`${style.place}`}>N°1</p>
        <div className={`${style.contenerInfo}`}>
          <p className={`${style.titreSerie}`}>johony english</p>
          <p className={`${style.desciptionSerie}`}>
            un film ou le perssonage principal est un veritable proffesionel de
            espoionnage et ne fait jamais de betise il est iréropchable et tout
            le monde s'en rend compte tellement il est fort
          </p>
        </div>
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
