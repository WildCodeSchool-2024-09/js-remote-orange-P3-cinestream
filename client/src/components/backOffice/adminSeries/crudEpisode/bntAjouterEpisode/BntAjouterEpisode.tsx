import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./bntAjouterEpisode.module.css";

interface BntAjouterEpisodeProps {
  updateInfoGeneral: () => Promise<boolean>;
  saisonSelect: number;
}

const BntAjouterEpisode = ({
  updateInfoGeneral,
  saisonSelect,
}: BntAjouterEpisodeProps) => {
  const navigate = useNavigate();
  const { token } = UseTokenContext();
  const { id } = useParams();

  //ajouter un episode au clike
  const handClicke = async () => {
    const values = {
      token: token,
      idArticle: id,
      saison: saisonSelect,
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

      //si la serie a été rajouter
      if (data.sucssces) {
        //met a jour les information general
        const saugarder = await updateInfoGeneral();
        //si les information on été sauvgarder
        if (saugarder) {
          navigate(
            `/admin/description/article/${data.idArticle}/saison/${saisonSelect}/${data.idSaison}/episode/${data.idEpisode}`,
          );
          window.scrollTo(0, 0);
          return;
        }
        //en cas d'erreur l'ore de update on demande a l'utilisateur si il veut quitter sans sauvgarder
        const message =
          "une erreur est survenue l'ore de auto sauvgarde, voulez allez a l'episode sans sauvgarder ?";
        if (window.confirm(message)) {
          navigate(
            `/admin/description/article/${data.idArticle}/saison/${data.idSaison}/episode/${data.idEpisode}`,
          );
          window.scrollTo(0, 0);
          return;
        }
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
