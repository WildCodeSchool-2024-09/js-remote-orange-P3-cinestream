import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import style from "./bntSauvgarde.module.css";

interface BntSauvgardeProps {
  updateCompte: () => Promise<boolean>;
  updateCPhotoProfil: () => Promise<boolean>;
  isPpModif: boolean;
}

const BntSauvgarde = ({
  updateCompte,
  updateCPhotoProfil,
  isPpModif,
}: BntSauvgardeProps) => {
  //pour changer de routes
  const navigate = useNavigate();

  const handleClick = async () => {
    const isUpdatePhoto = isPpModif ? await updateCPhotoProfil() : true;
    const isUpdateCompte = await updateCompte();
    if (isUpdateCompte && isUpdatePhoto) {
      navigate("/");
      return;
    }
    if (
      window.confirm(
        "une erreur est survenue, voulez vous quitter sans sauvgarder ?",
      )
    ) {
      navigate("/");
      return;
    }
  };

  return (
    <>
      <button
        className={`${style.bntSauvgarde}`}
        type="button"
        onClick={handleClick}
      >
        <FaCheck />
        Sauvgarder
      </button>
    </>
  );
};

export default BntSauvgarde;
