import Categorie from "./categorie/Categorie";
import styles from "./filterBarre.module.css";
import FilterDate from "./filterdate/Filterdate";
import Recherche from "./recherche/Recherche";
import TypeFiltre from "./type/TypeFiltre";

interface FilterBarreProps {
  recherche: string;
  setRecherche: (recherche: string) => void;
  categorie: string;
  setCategorie: (categorie: string) => void;
  setDate: (date: string) => void;
  type: string;
  setType: (type: string) => void;
}

const FilterBarre = ({
  recherche,
  setRecherche,
  categorie,
  setCategorie,
  setDate,
  type,
  setType,
}: FilterBarreProps) => {
  return (
    <div className={styles.filterBar}>
      <Recherche recherche={recherche} setRecherche={setRecherche} />
      <Categorie categorie={categorie} setCategorie={setCategorie} />
      <FilterDate setDate={setDate} />
      <TypeFiltre type={type} setType={setType} />
    </div>
  );
};

export default FilterBarre;
