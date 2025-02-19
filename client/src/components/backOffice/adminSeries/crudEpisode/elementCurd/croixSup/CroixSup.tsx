import axios from "axios";
import { MdClose } from "react-icons/md";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();

  const suprimerEepisode = async () => {
    const values = {
      token: token,
      idE: element.episode_id,
      idS: saison.saison_id,
      idA: id,
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
        if (data.nbNotCorrect) {
          alert("une serie doit avoir au moins 2 episode");
          return false;
        }
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
