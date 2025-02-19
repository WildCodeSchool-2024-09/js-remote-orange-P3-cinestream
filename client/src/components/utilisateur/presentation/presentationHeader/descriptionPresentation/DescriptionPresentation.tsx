import type { Episodes, Saison } from "../../../../../types/vite-env";
import style from "./descriptionPresentation.module.css";

interface DescriptionPresentationProps {
  article_type: string;
  article_date: string;
  episode: Episodes;
  numSaison: number;
  nbEpisode: number;
  allEpisodes: Saison[];
  filmCategories: string[];
}

const DescriptionPresentation = ({
  article_type,
  article_date,
  episode,
  numSaison,
  nbEpisode,
  allEpisodes,
  filmCategories,
}: DescriptionPresentationProps) => {
  const traduireDate = (date: string) => {
    return new Date(date).getFullYear();
  };
  const definirCategorie = (categorie: string[]) => {
    if (categorie.length === 0) return "";
    let categorieString = "";

    for (const element of categorie) {
      categorieString += `• ${element} `;
    }
    // Retire le dernier caractère
    return `${categorieString.slice(0, -1)}`;
  };

  return (
    <div className={style.contenerDescitpion}>
      <div className={style.contenerbule}>
        <p className={style.typeSerie}>{article_type}</p>
        {allEpisodes[0].article_premium ? (
          <p className={style.preume}>👑</p>
        ) : null}
      </div>
      <p className={style.pTitre}>{episode.episode_nom}</p>
      {allEpisodes[0].article_type !== "film" && (
        <p className={style.saison}>saison {numSaison}</p>
      )}
      <p className={style.infoDivert}>
        {nbEpisode} Episode {article_date && `• ${traduireDate(article_date)}`}{" "}
        {filmCategories?.length > 0 && definirCategorie(filmCategories)}
      </p>
    </div>
  );
};

export default DescriptionPresentation;
