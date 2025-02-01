import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/commun/footer/Footer";
import PresentationHeader from "../../../components/utilisateur/presentation/presentationHeader/PresentationHeader";
import PresentationHero from "../../../components/utilisateur/presentation/presentationHero/PresentationHero";
import style from "./presentation.module.css";

interface Episode {
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
  episodes: Episode[];
  article_type: string;
}

const Presentation = () => {
  const [episodeSelect, setEpisodeSelect] = useState(1);
  const [saisonSelect, setSaisonSelect] = useState(1);
  const [allEpisodes, setAllEpisodes] = useState<Saison[]>([]);

  const { idA } = useParams();
  const navigate = useNavigate();

  //récupéré tout les épisodes de la serie
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const getAllEpisode = async () => {
      const values = {
        idA: idA,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/details/getAllEpisode`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.sucssces) {
          setAllEpisodes(data.allEpisode);
        }
      } catch (error) {
        //si eurreur 404 traiter que eurreur 404
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          navigate("/404");
        }
        console.error(
          "une erreur est survenue l'ore de la récupération des épisodes",
        );
      }
    };
    getAllEpisode();
  }, []);

  return (
    <div className={`${style.presentationPage}`}>
      <PresentationHeader
        allEpisodes={allEpisodes}
        episodeSelect={episodeSelect}
        saisonSelect={saisonSelect}
      />
      <PresentationHero
        allEpisodes={allEpisodes}
        episodeSelect={episodeSelect}
        setEpisodeSelect={setEpisodeSelect}
        saisonSelect={saisonSelect}
        setSaisonSelect={setSaisonSelect}
      />
      <Footer />
    </div>
  );
};

export default Presentation;
