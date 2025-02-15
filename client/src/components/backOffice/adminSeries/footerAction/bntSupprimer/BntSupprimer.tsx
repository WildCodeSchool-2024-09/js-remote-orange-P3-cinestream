import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./bntSupprimer.module.css";

const BntSupprimer = () => {
  const { token } = UseTokenContext();
  const { id } = useParams();
  const navigate = useNavigate();

  //supprimer une serie
  const suprimerSerie = async () => {
    const values = {
      token: token,
      id: id,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/serie/suprimer`,
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

  //fonction au clike du bouton
  const handClicke = async () => {
    if (window.confirm("⚠️voulez vous vraiment supprimer cette SERIES ?⚠️")) {
      // verifier si la serie a ete supprimer
      const isSuprimer = await suprimerSerie();
      if (isSuprimer) {
        navigate("/admin/recherche");
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
