import styles from "./rechercheHeader.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.recherchetitle}>Tous les films</h1>
    </header>
  );
};

export default Header;
