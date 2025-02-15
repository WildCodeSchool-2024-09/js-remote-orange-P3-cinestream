import { useNavigate } from "react-router-dom";
import style from "./bntSaugarder.module.css";

interface BntSaugarderProps {
  updateInfoGeneral: () => Promise<boolean>;
}

const BntSaugarder = ({ updateInfoGeneral }: BntSaugarderProps) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const saugarder = await updateInfoGeneral();
    if (saugarder) {
      navigate("/admin/recherche");
      return;
    }
    if (
      window.confirm(
        "une erreur est survenue, voulez vous quitter sans sauvgarder ?",
      )
    ) {
      navigate("/admin/recherche");
      return;
    }
  };

  return (
    <div>
      <button
        className={`${style.bntSaugarder}`}
        type="button"
        onClick={handleClick}
      >
        Sauvegarder
      </button>
    </div>
  );
};

export default BntSaugarder;
