import BntEnvoyer from "./bntEnvoyer/BntEnvoyer";
import { useState } from "react";
import styles from "./commentaireUtilisateur.module.css";
import EtoileUtilisateur from "./etoileUtilisateur/EtoileUtilisateur";

const CommentaireUtilisateur = () => {
  //crée un state pour la notes
  const [note, setNote] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.star}>⭐</span>
        <p className={styles.pTitreAvis}>
          Laisse ton avis<span>(120 commentaire)</span>
        </p>
      </div>
      <EtoileUtilisateur note={note} setNote={setNote} />
      <div className={styles.TextAvatar}>
        <img src="/temporaire/profil/iconCompte.png" alt="" />
        <input type="text" placeholder="Écris ton commentaire ici..." />
        <BntEnvoyer />
      </div>
    </div>
  );
};

export default CommentaireUtilisateur;
