import { useRef } from "react";
import Slider from "react-slick";
import type { Saison } from "../../../../../types/vite-env";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./episode.module.css";
import InputSaison from "./inputSaison/InputSaison";

interface EpisodeProps {
  allEpisodes: Saison[];
  episodeSelect: number;
  setEpisodeSelect: (episode: number) => void;
  saisonSelect: number;
  setSaisonSelect: (saison: number) => void;
}

const Episode = ({
  allEpisodes,
  episodeSelect,
  setEpisodeSelect,
  saisonSelect,
  setSaisonSelect,
}: EpisodeProps) => {
  //permet de géré a quel niveau on est dans le slider
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    focusOnSelect: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const findIdSaion = () => {
    return allEpisodes.findIndex(
      (saison) => saison.saison_numero === saisonSelect,
    );
  };

  const handClikeEpisode = (numero: string | null) => {
    if (numero) {
      setEpisodeSelect(Number(numero));
    }
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handClikeEpisode);

  return (
    <>
      <div className={`${style.parentContainer}`}>
        <p className={`${style.titreSectionFilme}`}>Episodes</p>
        <InputSaison
          allEpisodes={allEpisodes}
          saisonSelect={saisonSelect}
          setSaisonSelect={setSaisonSelect}
          setEpisodeSelect={setEpisodeSelect}
          sliderRef={sliderRef}
        />
      </div>
      <div className={`slider-container ${style.sliderContainerFilme}`}>
        <div>
          {/* le slider */}
          <Slider ref={sliderRef} {...settings}>
            {allEpisodes.length > 0 &&
              allEpisodes[findIdSaion()].episodes.map((episode) => (
                <div
                  key={episode.episode_id}
                  className={`${style.elementCourselle}`}
                  data-id={episode.episode_numero}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  <div className={`${style.containerElement}`}>
                    <div className={`${style.containerImage}`}>
                      <img
                        src={
                          episode.episode_image !== null
                            ? `${import.meta.env.VITE_API_URL}/uploads/${episode.episode_image}`
                            : "/images/404/fondFilmSansImage.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className={`${style.containerInfo}`}>
                      <p
                        className={`${style.titreFilme} ${episode.episode_numero === episodeSelect ? style.titreFilmeSelected : ""}`}
                      >
                        {episode.episode_numero}-{episode.episode_nom}
                      </p>
                      <p className={`${style.desciptionFilme}`}>
                        {episode.episode_description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Episode;
