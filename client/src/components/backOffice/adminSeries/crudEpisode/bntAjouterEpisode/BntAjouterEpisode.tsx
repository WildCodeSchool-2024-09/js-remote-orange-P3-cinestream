import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./bntAjouterEpisode.module.css";

const BntAjouterEpisode = () => {
  const navigate = useNavigate();
  const { token } = UseTokenContext();
  const { id } = useParams();

  //ajouter un episode au clike
  const handClicke = async () => {
    const values = {
      token: token,
      idArticle: id,
      saison: 1,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/episode/new`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        navigate(
          `/admin/description/article/${data.idArticle}/saison/${data.idSaison}/episode/${data.idEpisode}`,
        );
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("eurreur l'ors de l'ajout de l'episode", error);
    }
  };

  return (
    <>
      <button
        className={`${style.bntAjouter}`}
        onClick={handClicke}
        type="button"
      >
        Ajouter un episode
      </button>
    </>
  );
};

export default BntAjouterEpisode;
