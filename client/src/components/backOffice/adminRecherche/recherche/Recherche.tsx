import { GoSearch } from "react-icons/go";
import style from "./recherche.module.css";

const Recherche = () => {
  return (
    <div className={`${style.divInputRecherche}`}>
      <GoSearch className={`${style.iconRecherche}`} />
      <input
        className={`${style.inputRecherche}`}
        type="texte"
        placeholder="Rechercher une série..."
      />
    </div>
  );
};

export default Recherche;
