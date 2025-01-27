import axios from "axios";
import { MdClose } from "react-icons/md";
import { UseTokenContext } from "../../../../../../context/tokenContext";
import style from "./croixSup.module.css";

interface CroixSupProps {
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

const CroixSup = ({ element, saison, getAllEpisode }: CroixSupProps) => {
  const { token } = UseTokenContext();

  const suprimerEepisode = async () => {
    const values = {
      token: token,
      idE: element.episode_id,
      idS: saison.saison_id,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/description/suprimer`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const handleCroixSup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //empeche que la div sactive
    e.stopPropagation();
    const isSuprimer = await suprimerEepisode();
    if (isSuprimer) {
      //re récupère les épisodes mis a jour
      await getAllEpisode();
    } else {
      alert("une erreur est survenue lors de la suppression de l'épisode");
    }
  };

  return (
    <button
      className={`${style.bntAction}`}
      type="button"
      onClick={handleCroixSup}
    >
      <MdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default CroixSup;
