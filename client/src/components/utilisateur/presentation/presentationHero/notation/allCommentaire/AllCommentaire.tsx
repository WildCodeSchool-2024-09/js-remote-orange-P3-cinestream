import { useEffect, useState } from "react";
import type { Commentaire } from "../../../../../../types/vite-env";
import styles from "./allCommentaire.module.css";
import AllCommentaireComposent from "./allCommentaireComposent/AllCommentaireComposent";
import BntPlus from "./bntPlus/BntPlus";

interface AllCommentaireProps {
  getAllCommentaire: () => Promise<void>;
  allCommentaire: Commentaire[];
}

const AllCommentaire = ({
  getAllCommentaire,
  allCommentaire,
}: AllCommentaireProps) => {
  const [compteur, setCompteur] = useState(4);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getAllCommentaire();
  }, []);

  return (
    <div className={styles.container}>
      {allCommentaire.map(
        (commentaire, index) =>
          index < compteur && (
            <div
              key={`${commentaire.article_id}, ${commentaire.utilisateur_id}`}
              className={styles.commentaire}
            >
              <AllCommentaireComposent commentaire={commentaire} />
            </div>
          ),
      )}
      {compteur < allCommentaire.length && (
        <div className={styles.bntPlusContainer}>
          <BntPlus compteur={compteur} setCompteur={setCompteur} />
        </div>
      )}
    </div>
  );
};

export default AllCommentaire;
