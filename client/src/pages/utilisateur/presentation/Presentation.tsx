import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/commun/footer/Footer";
import PresentationHeader from "../../../components/utilisateur/presentation/presentationHeader/PresentationHeader";
import ModalLecture from "../../../components/utilisateur/presentation/presentationHeader/modalLecture/ModalLecture";
import PresentationHero from "../../../components/utilisateur/presentation/presentationHero/PresentationHero";
import type { Saison } from "../../../types/vite-env";
import style from "./presentation.module.css";

const Presentation = () => {
  const [episodeSelect, setEpisodeSelect] = useState<number>(1);
  const [saisonSelect, setSaisonSelect] = useState<number>(1);
  const [allEpisodes, setAllEpisodes] = useState<Saison[]>([]);
  const [modealLecture, setModealLecture] = useState(false);
  const [filmCategories, setFilmCategories] = useState<string[]>([]);

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
          setFilmCategories(data.categorie);
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

  return (
    <div className={`${style.presentationPage}`}>
      {!modealLecture ? (
        <>
          <PresentationHeader
            allEpisodes={allEpisodes}
            episodeSelect={episodeSelect}
            saisonSelect={saisonSelect}
            setModealLecture={setModealLecture}
            filmCategories={filmCategories}
          />
          <PresentationHero
            allEpisodes={allEpisodes}
            episodeSelect={episodeSelect}
            setEpisodeSelect={setEpisodeSelect}
            saisonSelect={saisonSelect}
            setSaisonSelect={setSaisonSelect}
          />
          <Footer />
        </>
      ) : (
        <ModalLecture
          setModealLecture={setModealLecture}
          video={
            allEpisodes[findIdSaion()].episodes[findIdEpisode()]
              .episode_lien_video
          }
        />
      )}
    </div>
  );
};

export default Presentation;
