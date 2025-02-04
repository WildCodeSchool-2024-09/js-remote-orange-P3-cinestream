import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import type { Saison } from "../../../../../types/vite-env";
import style from "./bntRegarder.module.css";

interface Profile {
  pseudo: string;
  photo_profil: string | null;
  abonement: number;
  abonementExpire: string;
}

interface BntRegarderProps {
  setModealLecture: (modealLecture: boolean) => void;
  allEpisodes: Saison[];
}

const BntRegarder = ({ setModealLecture, allEpisodes }: BntRegarderProps) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { token } = UseTokenContext();
  const navigate = useNavigate();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const getProfil = async () => {
      const values = {
        token: token,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/compte/profile/get`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.success) {
          setProfile(data.compte);
        }
      } catch (error) {
        console.error(
          "une erreur est survenue l'ore de la récupération de la récuperation du profil",
        );
      }
    };
    if (token) {
      getProfil();
    }
  }, []);

  //au click sur le bouton regarder
  const handleClick = () => {
    if (!token) {
      //rediriger vers la page de connection
      navigate("/connection");
    } else {
      // si le film est premium
      if (allEpisodes[0].article_premium === 1) {
        //si le compte est premium
        if (profile?.abonement === 1) {
          //lancer le film
          setModealLecture(true);
        } else {
          //rediriger vers la page de compte
          navigate("/compte");
        }
      } else {
        //lancer le film
        setModealLecture(true);
      }
    }
  };

  //texte du bouton
  const defTexteBnt = () => {
    if (!token) {
      //sans compte
      return "Connection";
    }
    // si le film est premium
    if (allEpisodes[0].article_premium === 1) {
      //si le compte est premium
      if (profile?.abonement === 1) {
        //regarder film premium
        return "Regarder";
      }
      //achter un compte premium
      return "Acheter premium";
    }
    //reegarder film
    return "Regarder";
  };

  return (
    <>
      {allEpisodes.length > 0 && (
        <button
          className={style.bntRegarder}
          type="button"
          onClick={handleClick}
        >
          <div className={style.icon}>
            <svg viewBox="0 0 24 24">
              <title>Play Icon</title>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {defTexteBnt()}
        </button>
      )}
    </>
  );
};

export default BntRegarder;
