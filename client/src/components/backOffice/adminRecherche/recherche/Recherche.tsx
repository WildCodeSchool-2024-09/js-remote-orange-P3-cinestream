import { GoSearch } from "react-icons/go";
import style from "./recherche.module.css";

interface RechercheProps {
  recherche: string;
  setRecherche: (value: string) => void;
}

const Recherche = ({ recherche, setRecherche }: RechercheProps) => {
  return (
    <div className={`${style.divInputRecherche}`}>
      <GoSearch className={`${style.iconRecherche}`} />
      <input
        className={`${style.inputRecherche}`}
        type="texte"
        placeholder="Rechercher une série..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
    </div>
  );
};

export default Recherche;
