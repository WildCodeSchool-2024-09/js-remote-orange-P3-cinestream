import { Link } from "react-router-dom";
import style from "./bntRecherche.module.css";

const BntRecherche = () => {
  return (
    <>
      <Link to={"/recherche"}>
        <button className={`${style.searchButton}`} type="button">
          🔍
        </button>
      </Link>
    </>
  );
};

export default BntRecherche;
