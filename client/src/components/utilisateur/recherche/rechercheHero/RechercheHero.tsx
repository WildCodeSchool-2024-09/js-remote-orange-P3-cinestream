import styles from "./rechercheHero.module.css";
import FilmComposent from "./filmComposent/FilmComposent";
import FilterBarre from "./filterBarre/FilterBarre";

const RechercheHero = () => {
  return (
    <div className={styles.rechercheHero}>
      <FilterBarre />
      <FilmComposent />
    </div>
  );
};

export default RechercheHero;
