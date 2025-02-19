import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./filmComposent.module.css";

interface FilmData {
  id: number;
  image: string | null;
  nom: string;
  publier: boolean;
  premium: boolean;
  type: string;
}

const FilmComposent = ({ data }: { data: FilmData }) => {
  const navigate = useNavigate();
  const { token } = UseTokenContext();
  const [searchParams] = useSearchParams();
  const paramsMode = searchParams.get("mode");
  const paramsUniversIdA = searchParams.get("universIdA");

  //fonction qui ajoute article selection a univers de larticle parent
  const ajouterAuUnivers = async () => {
    const values = {
      token: token,
      idA: paramsUniversIdA,
      idAAjouter: data.id,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/article/crudUnivers/add`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        navigate(`/admin/organisation/${paramsUniversIdA}#crudUnivers`);
      }
    } catch (error) {
      console.error("eurreur lors de l'ajout de l'article a l'univers");
    }
  };

  const divOnClick = async () => {
    //si on est pas en mode addUnivers on redirige vers la page de l'article
    if (paramsMode !== "addUnivers") {
      navigate(`/admin/organisation/${data.id}`);
      return;
    }
    //si on est en mode addUnivers on ajoute l'article a l'univers
    await ajouterAuUnivers();
  };

  //function qui set image
  const defurl = () => {
    if (data.image === null) {
      return "/images/404/fondFilmSansImage.png";
    }
    return `${import.meta.env.VITE_API_URL}/uploads/${data.image}`;
  };

  return (
    <div
      className={`${style.contenerElement}`}
      onClick={() => {
        divOnClick();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          divOnClick();
        }
      }}
    >
      <img
        className={`${style.imgElement}`}
        src={defurl()}
        alt={`affiche de ${data.nom}`}
      />
      <div className={`${style.shadow}`} />
      {!data.publier && <div className={`${style.filmeEnProdution}`} />}
      <p className={`${style.titreElement}`}>{data.nom}</p>
      <p className={`${style.info}`}>
        {Boolean(data.premium) && "👑 |"} {data.type}
      </p>
    </div>
  );
};

export default FilmComposent;
