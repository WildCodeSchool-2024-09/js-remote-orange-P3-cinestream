import FilmComposent from "./filmComposent/filmComposent";
import FilterBarre from "./filterBarre/filterBarre";
import styles from "./rechercheHero.module.css";

const RechercheHero = () => {
  return (
    <div className={styles.rechercheHero}>
      <FilterBarre />
      <FilmComposent />
    </div>
  );
};

export default RechercheHero;
