import { useNavigate } from "react-router-dom";
import style from "./bntAjouterSerie.module.css";

const BntAjouterSerie = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={`${style.bntAjouter}`}
        onClick={() => navigate("/admin/recherche")}
        type="button"
      >
        Ajouter une série
      </button>
    </>
  );
};

export default BntAjouterSerie;
