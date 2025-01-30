import StarRatingComponent from "react-star-rating-component";
import axios from "axios";
import { useEffect } from "react";
import styles from "./etoileUtilisateur.module.css";
import { UseTokenContext } from "../../../../../../../context/tokenContext";
import { useParams } from "react-router-dom";

interface EtoileUtilisateurProps {
  note: number;
  setNote: (note: number) => void;
}

const EtoileUtilisateur = ({ note, setNote }: EtoileUtilisateurProps) => {
  const { token } = UseTokenContext();
  const { idA } = useParams();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const getNotesUtilisateur = async () => {
      const values = {
        token: token,
        idA: idA,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/details/getNotesUtilisateur`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.sucssces) {
          setNote(data.notes);
        }
      } catch (error) {
        console.error(
          "une eurreur est survenu l'or de la récupération de la notes",
          error,
        );
      }
    };
    if (token) {
      getNotesUtilisateur();
    }
  }, []);

  //relier la fonction EtoileUtilisateur a un requet au serveur pour modifier la notes en direct

  const onStarClick = (nextValue, prevValue, name) => {
    if (nextValue !== note) {
      setNote(nextValue);
    } else {
      setNote(0);
    }
  };

  return (
    <div className={styles.etoileUtilisateur}>
      <StarRatingComponent
        className={styles.contenerEtoile}
        name="rate1"
        starCount={5}
        value={note}
        onStarClick={onStarClick}
        renderStarIcon={() => <span>★</span>}
        renderStarIconHalf={() => <span>☆</span>}
      />
    </div>
  );
};

export default EtoileUtilisateur;
