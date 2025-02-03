import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import { UseTokenContext } from "../../../../../../../context/tokenContext";
import styles from "./etoileUtilisateur.module.css";

interface EtoileUtilisateurProps {
  note: number;
  setNote: (note: number) => void;
}

const EtoileUtilisateur = ({ note, setNote }: EtoileUtilisateurProps) => {
  const { token } = UseTokenContext();
  const { idA } = useParams();
  const navigate = useNavigate();

  const [noteHover, setNoteHover] = useState(0);

  //récupérer la note de l'utilisateur au chargement de la page
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
          setNote(Number(data.notes));
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

  //metre a jour la notes a chaque fois que l'utilisateur clique sur une etoile
  const updateNotesUtilisateur = async (newNotes: number) => {
    const values = {
      token: token,
      idA: idA,
      note: newNotes,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/utilisateur/details/updateNotesUtilisateur`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } catch (error) {
      console.error(
        "une eurreur est survenu pendant la mis a jour de la notes",
        error,
      );
    }
  };

  //relier la fonction EtoileUtilisateur a un requet au serveur pour modifier la notes en direct

  const onStarClick = async (nextValue: number) => {
    //verifie que utilisateur est bien connecter a un compte
    if (!token) {
      navigate("/connection");
    }
    //si il est connecter, on met a jour la note
    if (nextValue !== note) {
      setNote(nextValue);
      await updateNotesUtilisateur(nextValue);
    } else {
      //si l'utilisateur clique sur la meme note, on la retire
      setNote(0);
      await updateNotesUtilisateur(0);
    }
  };

  return (
    <div
      className={styles.etoileUtilisateur}
      onMouseOver={() => setNoteHover(note)}
      onMouseLeave={() => setNoteHover(0)}
      onFocus={() => setNoteHover(note)}
      onBlur={() => setNoteHover(0)}
    >
      <ReactStars
        className={styles.contenerEtoile}
        count={5}
        value={noteHover || note}
        onChange={onStarClick}
        size={window.innerWidth < 1024 ? 60 : 70}
        half={true}
        edit={true}
      />
    </div>
  );
};

export default EtoileUtilisateur;
