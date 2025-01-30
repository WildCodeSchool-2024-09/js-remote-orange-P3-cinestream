import { FaSearch } from "react-icons/fa";
import styles from "./recherche.module.css";

interface RechercheProps {
  recherche: string;
  setRecherche: (recherche: string) => void;
}

const Recherche = ({ recherche, setRecherche }: RechercheProps) => {
  return (
    <div className={styles.recherche}>
      <input
        type="text"
        placeholder="Rechercher"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
      <FaSearch className={styles.icon} />
    </div>
  );
};

export default Recherche;
