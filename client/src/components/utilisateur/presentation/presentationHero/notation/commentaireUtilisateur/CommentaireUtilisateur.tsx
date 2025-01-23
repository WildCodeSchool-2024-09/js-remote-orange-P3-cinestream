import BntEnvoyer from "./bntEnvoyer/BntEnvoyer";

import EtoileUtilisateur from "./etoileUtilisateur/EtoileUtilisateur";
import styles from "./commentaireUtilisateur.module.css";


const CommentaireUtilisateur = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.star}>⭐</span>
        <p className={styles.pTitreAvis}>
          Laisse ton avis<span>(120 commentaire)</span>
        </p>
      </div>
      <EtoileUtilisateur />
      <div className={styles.TextAvatar}>
        <img src="temporaire/profil/iconCompte.png" alt="" />
        <input type="text" placeholder="Écris ton commentaire ici..." />
        <BntEnvoyer />
      </div>
    </div>
  );
};

export default CommentaireUtilisateur;
