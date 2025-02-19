import axios from "axios";
import { useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../../../context/tokenContext";
import styles from "./bntEnvoyer.module.css";

interface BntEnvoyerProps {
  userCommentaire: string;
  setCommentaireAJour: (value: boolean) => void;
  getAllCommentaire: () => Promise<void>;
}

const BntEnvoyer = ({
  userCommentaire,
  setCommentaireAJour,
  getAllCommentaire,
}: BntEnvoyerProps) => {
  const { token } = UseTokenContext();
  const { idA } = useParams();

  const handleBntEnvoyer = async () => {
    const values = {
      idA: idA,
      valeur: userCommentaire,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/utilisateur/details/commentaireUtilisateur/update`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        },
      );

      if (!data.sucssces) {
        alert("problème l'ore de uplode du comentaire");
      } else {
        setCommentaireAJour(true);
        await getAllCommentaire();
      }
    } catch (error) {
      console.error(
        "une eurreur est survenu l'or de la récupération de du commentaire",
      );
    }
  };

  return (
    <button
      type="button"
      className={styles.bntEnvoyer}
      onClick={handleBntEnvoyer}
    >
      Publier
    </button>
  );
};

export default BntEnvoyer;
