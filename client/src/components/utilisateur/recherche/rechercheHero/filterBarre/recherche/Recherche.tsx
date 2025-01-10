import { FaSearch } from "react-icons/fa";
import styles from "./recherche.module.css";

const Recherche = () => {
  return (
    <div className={styles.recherche}>
      <input type="text" placeholder="Rechercher" />
      <FaSearch className={styles.icon} />
    </div>
  );
};

export default Recherche;
