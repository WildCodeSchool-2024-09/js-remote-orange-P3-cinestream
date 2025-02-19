import { useNavigate } from "react-router-dom";
import style from "./bntAnnuler.module.css";

const BntAnnuler = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className={`${style.bntAnnuler}`}
        type="button"
        onClick={() => navigate("/admin/recherche")}
      >
        Annuler
      </button>
    </div>
  );
};

export default BntAnnuler;
