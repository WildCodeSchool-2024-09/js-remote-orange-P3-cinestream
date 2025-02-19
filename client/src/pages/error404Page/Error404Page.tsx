import { Link } from "react-router-dom";
import style from "./error404Page.module.css";

const Error404Page = () => {
  return (
    <div className={style.container404}>
      <div className={style.transparent}>
        <Link to="/">
          <div className={style.pilleBorder} />
        </Link>
        <div className={style.pille}>
          <div className={style.pilleBout} />
          <div className={style.pilleCharge} />
        </div>
        <p>
          404 - Page non trouvée. Veuillez vérifier l'URL ou appuyer sur la pile
          pour recharger l'accueil
        </p>
      </div>
    </div>
  );
};

export default Error404Page;
