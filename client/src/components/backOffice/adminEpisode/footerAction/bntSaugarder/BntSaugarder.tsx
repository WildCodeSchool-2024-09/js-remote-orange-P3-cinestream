import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "./bntSaugarder.module.css";

interface BntSaugarderProps {
  updateEpisode: () => Promise<boolean>;
}

const BntSaugarder = ({ updateEpisode }: BntSaugarderProps) => {
  const navigate = useNavigate();
  const { idA, numS } = useParams();

  const handleClick = async () => {
    const saugarder = await updateEpisode();
    if (saugarder) {
      navigate(`/admin/organisation/${idA}/${numS}#crudEpisode`);
      return;
    }
    //si ca a pas sauvgarder demander si il veut quitter sans sauvgarder
    if (
      window.confirm(
        "une erreur est survenue, voulez vous quitter sans sauvgarder ?",
      )
    ) {
      navigate(`/admin/organisation/${idA}/${numS}#crudEpisode`);
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
