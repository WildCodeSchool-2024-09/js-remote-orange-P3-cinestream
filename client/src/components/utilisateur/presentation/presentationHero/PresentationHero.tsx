import Episode from "./episode/Episode";
import Notation from "./notation/Notation";
import Univers from "./univers/Univers";

interface Episodes {
  episode_description: string | null;
  episode_id: number;
  episode_image: string | null;
  episode_lien_video: string | null;
  episode_nom: string;
  episode_numero: number;
}

interface Saison {
  saison_id: number;
  saison_numero: number;
  episodes: Episodes[];
  article_type: string;
}

interface PresentationHeroProps {
  allEpisodes: Saison[];
  episodeSelect: number;
  setEpisodeSelect: (episode: number) => void;
  saisonSelect: number;
  setSaisonSelect: (saison: number) => void;
}

const PresentationHero = ({
  allEpisodes,
  episodeSelect,
  setEpisodeSelect,
  saisonSelect,
  setSaisonSelect,
}: PresentationHeroProps) => {
  return (
    <>
      {allEpisodes.length > 0 && allEpisodes[0].article_type === "serie" && (
        <Episode
          allEpisodes={allEpisodes}
          episodeSelect={episodeSelect}
          setEpisodeSelect={setEpisodeSelect}
          saisonSelect={saisonSelect}
          setSaisonSelect={setSaisonSelect}
        />
      )}
      <Univers />
      <Notation />
    </>
  );
};

export default PresentationHero;
