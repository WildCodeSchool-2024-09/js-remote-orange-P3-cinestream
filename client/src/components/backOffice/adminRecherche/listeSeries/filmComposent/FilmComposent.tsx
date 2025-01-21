import { useNavigate } from "react-router-dom";
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

  //function qui set image
  const defurl = () => {
    if (data.image === null) {
      return "/public/images/404/image404.jpg";
    }
    return data.image;
  };

  return (
    <div
      className={`${style.contenerElement}`}
      onClick={() => {
        navigate(`/admin/organisation/${data.id}`);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate(`/admin/organisation/${data.id}`);
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
