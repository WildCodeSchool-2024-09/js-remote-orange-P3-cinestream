import axios from "axios";
import { FaArrowDown } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../../context/tokenContext";
import style from "./flecheBas.module.css";

interface FlecheBasProps {
  element: {
    episode_description: string | null;
    episode_id: number;
    episode_image: string | null;
    episode_lien_video: string | null;
    episode_nom: string;
    episode_numero: number;
  };
  saison: {
    saison_id: number;
    saison_numero: number;
  };
  getAllEpisode: () => void;
}

const FlecheBas = ({ element, saison, getAllEpisode }: FlecheBasProps) => {
  const { token } = UseTokenContext();
  const { id } = useParams();

  const handleFlecheBas = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //empeche que la div sactive
    e.stopPropagation();

    const values = {
      idA: id,
      idS: saison.saison_id,
      idE: element.episode_id,
      action: "down",
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/episode/mouve`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        },
      );

      if (data.sucssces) {
        await getAllEpisode();
      }
    } catch (error) {
      console.error("eurrore l'ore du déplacement de l'episode");
    }
  };

  return (
    <button
      className={`${style.bntAction}`}
      type="button"
      onClick={handleFlecheBas}
    >
      <FaArrowDown className={`${style.iconFleche}`} />
    </button>
  );
};

export default FlecheBas;
