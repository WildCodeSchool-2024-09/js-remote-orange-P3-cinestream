import { useState } from "react";
import FilmComposent from "./filmComposent/filmComposent";
import FilterBarre from "./filterBarre/filterBarre";
import styles from "./rechercheHero.module.css";

const RechercheHero = () => {
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("all");
  const [date, setDate] = useState("");
  const [type, setType] = useState("all");

  return (
    <div className={styles.rechercheHero}>
      <FilterBarre
        recherche={recherche}
        setRecherche={setRecherche}
        categorie={categorie}
        setCategorie={setCategorie}
        setDate={setDate}
        type={type}
        setType={setType}
      />
      <FilmComposent
        recherche={recherche}
        categorie={categorie}
        date={date}
        type={type}
      />
    </div>
  );
};

export default RechercheHero;
