import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BntPlus from "./bntPlus/BntPlus";
import styles from "./filmComposent.module.css";

interface Article {
  id: number;
  date: null | string;
  description: string | null;
  image: string | null;
  image_rectangle: string | null;
  nom: string;
  premium: number;
  publier: number;
  type: string;
  univers_id: null | number;
  univers_numero: null | number;
  categorie: string[];
}

interface FilmComposentProps {
  recherche: string;
  categorie: string;
  date: string;
  type: string;
}

const FilmComposent = ({
  recherche,
  categorie,
  date,
  type,
}: FilmComposentProps) => {
  const [allFilm, setAllFilm] = useState<Article[]>([]);
  const [compteur, setCompteur] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllArticle = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/recherche/filmSerie/getAll`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (data.sucssces) {
          setAllFilm(data.allArticle);
        }
      } catch (error) {
        console.error("eurreur l'ore de la récupération des filme/serie");
      }
    };

    getAllArticle();
  }, []);

  function filterFilm(film: Article) {
    if (recherche !== "") {
      //si le nom du film ne contient pas la recherche
      if (!film.nom.toLowerCase().includes(recherche.toLowerCase())) {
        //si la description du film est null ou que la description ne contient pas la recherche
        if (
          film.description === null ||
          !film.description.toLowerCase().includes(recherche.toLowerCase())
        ) {
          return false;
        }
      }
    }
    if (categorie !== "all") {
      if (!film.categorie.includes(categorie)) {
        return false;
      }
    }
    if (date !== "") {
      //si la date du film est null et que le filtre est activer
      if (film.date === null) {
        return false;
      }
      //date film
      const dateFilm = new Date(film.date); // Créer un objet Date
      const annerFilm = dateFilm.getFullYear(); //récupérer l'année du film
      //compare l'année du film avec l'année du filtre
      if (Number(date) !== annerFilm) {
        return false;
      }
    }
    if (type !== "all") {
      if (film.type !== type) {
        return false;
      }
    }
    return true;
  }

  const onFilmClick = (id: number) => {
    navigate(`/detail/${id}`);
    window.scrollTo(0, 0);
  };

  const allFilmFilter = allFilm.filter((film) => filterFilm(film));

  return (
    <div>
      <div className={styles.filmComposent}>
        {/* géré le chargement */}
        {allFilm.length === 0 ? (
          <div className={styles.messageAucunFilm}> Chargement ...</div>
        ) : allFilmFilter.length === 0 ? (
          <div className={styles.messageAucunFilm}> Aucun film trouver</div>
        ) : (
          allFilmFilter.map(
            (film, index) =>
              index < compteur && (
                <div
                  key={film.id}
                  className={styles.filmCard}
                  onClick={() => {
                    onFilmClick(film.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      onFilmClick(film.id);
                    }
                  }}
                  aria-label={`Voir le film ${film.nom}`}
                >
                  <img
                    src={
                      film.image
                        ? `${import.meta.env.VITE_API_URL}/uploads/${film.image}`
                        : "/images/404/fondFilmSansImage.png"
                    }
                    alt={film.nom}
                  />
                  <div className={styles.title}>{film.nom}</div>
                  <div className={styles.description}>
                    {film.description ? film.description : ""}
                  </div>
                  <div className={styles.type}>{film.type}</div>
                </div>
              ),
          )
        )}
      </div>
      {/* bouton ajouter plus */}
      {compteur < allFilmFilter.length && (
        <BntPlus compteur={compteur} setCompteur={setCompteur} />
      )}
    </div>
  );
};

export default FilmComposent;
