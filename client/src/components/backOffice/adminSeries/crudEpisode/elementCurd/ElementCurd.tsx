import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CroixSup from "./croixSup/CroixSup";
import style from "./elementCurd.module.css";
import FlecheBas from "./flecheBas/FlecheBas";
import FlecheHaut from "./flecheHaut/FlecheHaut";

interface ElementCurdProps {
  element: {
    episode_description: string | null;
    episode_id: number;
    episode_image: string | null;
    episode_lien_video: string | null;
    episode_nom: string;
    episode_numero: number;
  };
  saison: {
    saison_id: number;
    saison_numero: number;
  };
  updateInfoGeneral: () => Promise<boolean>;
  getAllEpisode: () => void;
  type: string;
}

const ElementCurd = ({
  element,
  saison,
  updateInfoGeneral,
  getAllEpisode,
  type,
}: ElementCurdProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  //au clike d'une section on sauvgarde les information automatiquement
  const onClick = async () => {
    const saugarder = await updateInfoGeneral();
    if (saugarder) {
      navigate(
        `/admin/description/article/${id}/saison/${saison.saison_numero}/${saison.saison_id}/episode/${element.episode_id}`,
      );
      window.scrollTo(0, 0);
      return;
    }
    //en cas d'erreur l'ore de update on demande a l'utilisateur si il veut quitter sans sauvgarder
    const message =
      "une erreur est survenue l'ore de auto sauvgarde, voulez vous quitter sans sauvgarder ?";
    if (window.confirm(message)) {
      navigate(
        `/admin/description/article/${id}/saison/${saison.saison_numero}/${saison.saison_id}/episode/${element.episode_id}`,
      );
      window.scrollTo(0, 0);
      return;
    }
  };

  return (
    <div
      className={`${style.contenerElement}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <div className={`${style.contenerGauche}`}>
        <div className={`${style.contenerImage}`}>
          <img
            src={
              element.episode_image
                ? `${import.meta.env.VITE_API_URL}/uploads/${element.episode_image}`
                : "/images/404/fondFilmSansImage.png"
            }
            alt="icon episode"
          />
        </div>
        <div className={`${style.contenerInfoEpisode}`}>
          {type !== "film" && (
            <>
              <p className={`${style.nEpisode}`}>
                Épisode {element.episode_numero}
              </p>
              <p
                className={`${style.allInfo}`}
              >{`S${String(saison.saison_numero).padStart(2, "0")}E${String(element.episode_numero).padStart(2, "0")}`}</p>
            </>
          )}
        </div>
        <p className={`${style.titreEpisode}`}>{element.episode_nom}</p>
      </div>
      <div className={`${style.contenerDroite}`}>
        {type !== "film" && (
          <>
            <FlecheHaut
              element={element}
              saison={saison}
              getAllEpisode={getAllEpisode}
            />
            <FlecheBas
              element={element}
              saison={saison}
              getAllEpisode={getAllEpisode}
            />
            <CroixSup
              element={element}
              saison={saison}
              getAllEpisode={getAllEpisode}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ElementCurd;
