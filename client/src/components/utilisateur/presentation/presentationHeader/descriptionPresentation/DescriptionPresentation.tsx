import type { Episodes, Saison } from "../../../../../types/vite-env";
import style from "./descriptionPresentation.module.css";

interface DescriptionPresentationProps {
  article_type: string;
  article_date: string;
  episode: Episodes;
  numSaison: number;
  nbEpisode: number;
  allEpisodes: Saison[];
}

const DescriptionPresentation = ({
  article_type,
  article_date,
  episode,
  numSaison,
  nbEpisode,
  allEpisodes,
}: DescriptionPresentationProps) => {
  const traduireDate = (date: string) => {
    return new Date(date).getFullYear();
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
        • Action • sience fiction
      </p>
    </div>
  );
};

export default DescriptionPresentation;
