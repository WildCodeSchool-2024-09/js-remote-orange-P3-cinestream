import axios from "axios";
import { useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./InputSaison.module.css";

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

interface InputSaisonProps {
  allEpisode: Saison[];
  saisonSelect: number;
  setSaisonSelect: (value: number) => void;
  getAllEpisode: () => void;
}

const InputSaison = ({
  allEpisode,
  saisonSelect,
  setSaisonSelect,
  getAllEpisode,
}: InputSaisonProps) => {
  const { token } = UseTokenContext();
  const { id } = useParams();

  const onChangeSlection = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "add") {
      // Trouver la meilleure note
      const saison = allEpisode.reduce((nbMax, nb) => {
        return nb.saison_numero > nbMax.saison_numero ? nb : nbMax;
      }, allEpisode[0]);

      const values = {
        token: token,
        idArticle: id,
        saison: saison.saison_numero + 1,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/backoffice/episode/new`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        //si la serie a été rajouter
        if (data.sucssces) {
          await getAllEpisode();
          setSaisonSelect(values.saison);
        }
      } catch (error) {
        console.error("eurreur l'ors de l'ajout de la saison");
      }
      return;
    }
    setSaisonSelect(Number(e.target.value));
    return;
  };

  return (
    <select
      className={`${style.InputSaison}`}
      value={saisonSelect}
      onChange={onChangeSlection}
    >
      {allEpisode.map((saison) => (
        <option key={saison.saison_id} value={saison.saison_numero}>
          Saison {saison.saison_numero}
        </option>
      ))}
      <option value="add">Ajouter</option>
    </select>
  );
};

export default InputSaison;
