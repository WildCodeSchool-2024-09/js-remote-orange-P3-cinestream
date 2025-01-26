import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UseTokenContext } from "../../../../context/tokenContext";
import style from "./CrudEpisode.module.css";
import InputSaison from "./InputSaison/InputSaison";
import BntAjouterEpisode from "./bntAjouterEpisode/BntAjouterEpisode";
import ElementCurd from "./elementCurd/ElementCurd";

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
}

interface CrudEpisodeProps {
  updateInfoGeneral: () => Promise<boolean>;
}

const CrudEpisode = ({ updateInfoGeneral }: CrudEpisodeProps) => {
  const { token } = UseTokenContext();
  const [allEpisode, setAllEpisode] = useState<Saison[]>([]);
  const [saisonSelect, setSaisonSelect] = useState<number>(1);
  const { id } = useParams();

  const getAllEpisode = async () => {
    const values = {
      token: token,
      idArticle: id,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/episode/getAll`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        setAllEpisode(data.allEpisode);
      }
    } catch (error) {
      console.error("eurrore l'ore de la recupération des épisodes");
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    //récupère tout les episode en avant le rendu
    getAllEpisode();
  }, []);

  const findIndexSaison = () => {
    return allEpisode.findIndex((e) => e.saison_numero === saisonSelect);
  };

  return (
    <div className={`${style.contenerSection}`} id="crudEpisode">
      <p className={`${style.titreSection}`}>Épisodes</p>
      <div className={`${style.flexAllElement}`}>
        <InputSaison
          allEpisode={allEpisode}
          saisonSelect={saisonSelect}
          setSaisonSelect={setSaisonSelect}
        />

        {/* affiche toute les carte */}
        {allEpisode.length > 0 &&
          allEpisode[findIndexSaison()].episodes.map((element) => {
            return (
              <ElementCurd
                key={element.episode_id}
                element={element}
                saison={allEpisode[findIndexSaison()]}
                updateInfoGeneral={updateInfoGeneral}
                getAllEpisode={getAllEpisode}
              />
            );
          })}

        <BntAjouterEpisode />
      </div>
    </div>
  );
};

export default CrudEpisode;
