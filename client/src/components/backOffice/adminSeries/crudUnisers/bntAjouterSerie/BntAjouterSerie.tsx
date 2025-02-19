import { useNavigate, useParams } from "react-router-dom";
import style from "./bntAjouterSerie.module.css";

interface BntAjouterSerieProps {
  updateInfoGeneral: () => Promise<boolean>;
}

const BntAjouterSerie = ({ updateInfoGeneral }: BntAjouterSerieProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = async () => {
    const saugarder = await updateInfoGeneral();
    if (saugarder) {
      //navigue vers la page recherche avec le mode addUnivers
      navigate(`/admin/recherche?mode=addUnivers&universIdA=${id}`);
      window.scrollTo(0, 0);
      return;
    }
    //en cas d'erreur l'ore de update on demande a l'utilisateur si il veut quitter sans sauvgarder
    const message =
      "une erreur est survenue l'ore de auto sauvgarde, voulez allez a l'episode sans sauvgarder ?";
    if (window.confirm(message)) {
      //navigue vers la page recherche avec le mode addUnivers
      navigate(`/admin/recherche?mode=addUnivers&universIdA=${id}`);
      window.scrollTo(0, 0);
      return;
    }
  };

  return (
    <>
      <button
        className={`${style.bntAjouter}`}
        onClick={handleClick}
        type="button"
      >
        Ajouter une série
      </button>
    </>
  );
};

export default BntAjouterSerie;
