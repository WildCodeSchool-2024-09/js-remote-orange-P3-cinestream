import type { Saison } from "../../../../types/vite-env";
import NavBarre from "../../../commun/navBarre/NavBarre";
import BntEdite from "./bntEdite/BntEdite";
import BntFavorie from "./bntFavorie/BntFavorie";
import BntPartager from "./bntPartager/BntPartager";
import BntRegarder from "./bntRegarder/BntRegarder";
import DescriptionPresentation from "./descriptionPresentation/DescriptionPresentation";
import style from "./presentationHeader.module.css";

interface presentationHeaderProps {
  allEpisodes: Saison[];
  episodeSelect: number;
  saisonSelect: number;
  setModealLecture: (value: boolean) => void;
  filmCategories: string[];
}

const PresentationHeader = ({
  allEpisodes,
  episodeSelect,
  saisonSelect,
  setModealLecture,
  filmCategories,
}: presentationHeaderProps) => {
  const findIdSaion = () => {
    return allEpisodes.findIndex(
      (saison) => saison.saison_numero === saisonSelect,
    );
  };

  const findIdEpisode = () => {
    //trouve l'index de l'épisode
    return allEpisodes[findIdSaion()].episodes.findIndex(
      (episode) => episode.episode_numero === episodeSelect,
    );
  };

  const findNbEpisode = () => {
    return allEpisodes[findIdSaion()].episodes.length;
  };

  return (
    <>
      <div
        className={style.header}
        style={{
          backgroundImage:
            allEpisodes.length > 0
              ? allEpisodes[findIdSaion()].episodes[findIdEpisode()]
                  .episode_image !== null
                ? `url(${import.meta.env.VITE_API_URL}/uploads/${allEpisodes[findIdSaion()].episodes[findIdEpisode()].episode_image})`
                : `url("/images/404/fondFilmSansImage.png")`
              : "url(#)",
        }}
      >
        <div className={style.contenerNavBarre}>
          <NavBarre />
        </div>
        <div className={style.descriptionPresentation}>
          {allEpisodes.length > 0 && (
            <DescriptionPresentation
              article_date={allEpisodes[findIdSaion()].article_date}
              article_type={allEpisodes[findIdSaion()].article_type}
              episode={allEpisodes[findIdSaion()].episodes[findIdEpisode()]}
              numSaison={allEpisodes[findIdSaion()].saison_numero}
              nbEpisode={findNbEpisode()}
              allEpisodes={allEpisodes}
              filmCategories={filmCategories}
            />
          )}
        </div>
        <div className={style.bntRegarder}>
          <BntRegarder
            setModealLecture={setModealLecture}
            allEpisodes={allEpisodes}
          />
        </div>
        <div className={style.bntContainer}>
          <BntEdite />
          <BntPartager />
          <BntFavorie />
        </div>
      </div>
      <div>
        <p className={style.paragraphWhite}>
          {allEpisodes.length > 0 &&
            allEpisodes[findIdSaion()].episodes[findIdEpisode()]
              .episode_description}
        </p>
      </div>
    </>
  );
};

export default PresentationHeader;
