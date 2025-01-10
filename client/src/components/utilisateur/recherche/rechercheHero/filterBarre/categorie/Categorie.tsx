import { FaChevronDown } from "react-icons/fa";
import styles from "./categorie.module.css";

const Categorie = () => {
  return (
    <div className={styles.categorie}>
      <span>Catégorie</span>
      <FaChevronDown className={styles.icon} />
    </div>
  );
};

export default Categorie;
