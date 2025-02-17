import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./bntSupprimer.module.css";

const BntSupprimer = () => {
  const { token } = UseTokenContext();
  const { idA, idS, idE, numS } = useParams();
  const navigate = useNavigate();

  //supprimer une serie
  const suprimerSerie = async () => {
    const values = {
      token: token,
      idE: idE,
      idS: idS,
      idA: idA,
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

  //fonction au clike du bouton
  const handClicke = async () => {
    if (window.confirm("voulez vous vraiment supprimer cette episode ?")) {
      // verifier si la serie a ete supprimer
      const isSuprimer = await suprimerSerie();
      if (isSuprimer) {
        navigate(`/admin/organisation/${idA}/${numS}#crudEpisode`);
      }
    }
  };

  return (
    <button
      className={`${style.BntSupprimer}`}
      type="button"
      onClick={handClicke}
    >
      Supprimer
    </button>
  );
};

export default BntSupprimer;
