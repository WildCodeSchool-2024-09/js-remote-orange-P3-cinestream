import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import type { Commentaire } from "../../../../../types/vite-env";
import AllCommentaire from "./allCommentaire/AllCommentaire";
import CommentaireUtilisateur from "./commentaireUtilisateur/CommentaireUtilisateur";

const Notation = () => {
  const { idA } = useParams();
  const [allCommentaire, setAllCommentaire] = useState([] as Commentaire[]);
  const [nbCommentaire, setNbCommentaire] = useState(0);
  const [moyenneNotes, setMoyenneNotes] = useState(0);

  const getAllCommentaire = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/utilisateur/details/toutCommentaire`,
        {
          headers: {
            "Content-Type": "application/json",
            idA: idA,
          },
        },
      );

      if (data.sucssces) {
        setAllCommentaire(data.allCommentaire);
        setNbCommentaire(data.nbCommentaire);
        setMoyenneNotes(data.moyenneNotes);
      }
    } catch (error) {
      console.error(
        "une eurreur est survenu l'or de la récupération de tout les commentaires",
      );
    }
  };

  return (
    <>
      <CommentaireUtilisateur
        getAllCommentaire={getAllCommentaire}
        nbCommentaire={nbCommentaire}
        moyenneNotes={moyenneNotes}
      />
      <AllCommentaire
        getAllCommentaire={getAllCommentaire}
        allCommentaire={allCommentaire}
      />
    </>
  );
};

export default Notation;
