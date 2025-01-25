import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "./bntAnnuler.module.css";

const BntAnnuler = () => {
  const navigate = useNavigate();
  const { idA } = useParams();

  return (
    <div>
      <button
        className={`${style.bntAnnuler}`}
        type="button"
        onClick={() => navigate(`/admin/organisation/${idA}`)}
      >
        Annuler
      </button>
    </div>
  );
};

export default BntAnnuler;
