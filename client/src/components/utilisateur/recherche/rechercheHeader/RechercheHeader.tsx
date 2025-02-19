import NavBarre from "../../../commun/navBarre/NavBarre";
import styles from "./rechercheHeader.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBarre />
      <p className={styles.recherchetitle}>Tous les films</p>
    </div>
  );
};

export default Header;
