import type { Episodes } from "../../../../../types/vite-env";
import style from "./descriptionPresentation.module.css";

interface DescriptionPresentationProps {
  article_type: string;
  episode: Episodes;
  numSaison: number;
}

const DescriptionPresentation = ({
  article_type,
  episode,
  numSaison,
}: DescriptionPresentationProps) => {
  return (
    <div>
      <div className={style.rectangle}>
        <p>{article_type}</p>
      </div>
      <div className={style.titre}>
        <p>{episode.episode_nom}</p>
      </div>
      <div className={style.saison}>
        <p>saison {numSaison}</p>
      </div>
      <div className={style.description}>
        <p>9 Episode•2022•Action•sience fiction</p>
      </div>
    </div>
  );
};

export default DescriptionPresentation;
