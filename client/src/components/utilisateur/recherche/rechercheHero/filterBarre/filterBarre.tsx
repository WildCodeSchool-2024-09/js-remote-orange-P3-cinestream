import Categorie from "./categorie/Categorie";
import styles from "./filterBarre.module.css";
import FilterDate from "./filterdate/Filterdate";
import Recherche from "./recherche/Recherche";
import TypeFiltre from "./type/TypeFiltre";

const FilterBarre = () => {
  return (
    <div className={styles.filterBar}>
      <Recherche />
      <Categorie />
      <FilterDate />
      <TypeFiltre />
    </div>
  );
};

export default FilterBarre;
