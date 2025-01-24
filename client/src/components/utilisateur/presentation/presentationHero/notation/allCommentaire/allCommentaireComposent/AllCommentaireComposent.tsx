import styles from "./AllCommentaireComposent.module.css";

const AllCommentaireComposent = () => {
  return (
    <div className={styles.contenerCommentaire}>
      <p className={styles.pNotes}>⭐ 4.9</p>
      <p className={styles.pTexte}>
        Ahmad Movi lives with his newfound family formed on the planet of
        Pandora. Once a familiar threat returns to finish. Jake must work with
        Neytiri and the army of the Na'vi race to protect their planet
      </p>
      <p className={styles.pAuteur}>
        <span className={styles.span}>@yazuz1809</span>• 3H
      </p>
    </div>
  );
};

export default AllCommentaireComposent;
