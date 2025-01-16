import { useNavigate } from "react-router-dom";
import style from "./bntAjouterEpisode.module.css";

const BntAjouterEpisode = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={`${style.bntAjouter}`}
        onClick={() => navigate("/admin/description")}
        type="button"
      >
        Ajouter un episode
      </button>
    </>
  );
};

export default BntAjouterEpisode;
