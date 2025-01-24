import styles from "./AllCommentaire.module.css";
import AllCommentaireComposent from "./allCommentaireComposent/AllCommentaireComposent";
import BntPlus from "./bntPlus/BntPlus";

const AllCommentaire = () => {
  return (
    <div className={styles.container}>
      <div className={styles.commentaire}>
        <AllCommentaireComposent />
      </div>
      <div className={styles.commentaire}>
        <AllCommentaireComposent />
      </div>
      <div className={styles.commentaire}>
        <AllCommentaireComposent />
      </div>
      <div className={styles.commentaire}>
        <AllCommentaireComposent />
      </div>
      <div className={styles.bntPlusContainer}>
        <BntPlus />
      </div>
    </div>
  );
};

export default AllCommentaire;
