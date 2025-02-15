import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../../context/tokenContext";
import BntEnvoyer from "./bntEnvoyer/BntEnvoyer";
import styles from "./commentaireUtilisateur.module.css";
import EtoileUtilisateur from "./etoileUtilisateur/EtoileUtilisateur";

interface CommentaireUtilisateurProps {
  getAllCommentaire: () => Promise<void>;
  nbCommentaire: number;
  moyenneNotes: number;
}

const CommentaireUtilisateur = ({
  getAllCommentaire,
  nbCommentaire,
  moyenneNotes,
}: CommentaireUtilisateurProps) => {
  //crée un state pour la notes
  const [note, setNote] = useState(0);
  const [userCommentaire, setUserCommentaire] = useState("");
  const [commentaireAJour, setCommentaireAJour] = useState(false);
  const [photoProfilPreview, setPhotoProfilPreview] = useState<null | string>(
    null,
  );
  const { token } = UseTokenContext();
  const { idA } = useParams();
  const navigate = useNavigate();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const getUserCommentaire = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/details/commentaireUtilisateur`,
          {
            headers: {
              "Content-Type": "application/json",
              token: token,
              idA: idA,
            },
          },
        );

        if (data.sucssces) {
          setUserCommentaire(data.userCommentaire);
          setPhotoProfilPreview(data.photo_profil);
          setCommentaireAJour(true);
        }
      } catch (error) {
        console.error(
          "une eurreur est survenu l'or de la récupération de du commentaire",
        );
      }
    };
    if (token) {
      getUserCommentaire();
    } else {
      setCommentaireAJour(true);
    }
  }, []);

  const definirNotes = (note: number) => {
    if (note === 0) return "⭐0";
    return `⭐${Number(note.toFixed(1))}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span
          className={styles.star}
        >{`${definirNotes(Number(moyenneNotes))}`}</span>
        <p className={styles.pTitreAvis}>
          Laisse ton avis<span>({nbCommentaire} commentaire)</span>
        </p>
      </div>
      <EtoileUtilisateur note={note} setNote={setNote} />
      <div className={styles.TextAvatar}>
        {token && (
          <img
            src={
              photoProfilPreview
                ? `${import.meta.env.VITE_API_URL}/uploads/${photoProfilPreview}`
                : "/images/icon/iconCompte.png"
            }
            alt=""
          />
        )}
        <input
          className={
            !commentaireAJour
              ? `${styles.modificationEnCour} ${styles.inputCommentaire}`
              : `${styles.inputCommentaire}`
          }
          type="text"
          placeholder="Écris ton commentaire ici..."
          value={userCommentaire}
          onChange={(e) => {
            setUserCommentaire(e.target.value);
            setCommentaireAJour(false);
            if (!token) {
              navigate("/connection");
            }
          }}
        />
        {token && (
          <BntEnvoyer
            userCommentaire={userCommentaire}
            setCommentaireAJour={setCommentaireAJour}
            getAllCommentaire={getAllCommentaire}
          />
        )}
      </div>
    </div>
  );
};

export default CommentaireUtilisateur;
