import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import style from "./BntFermerRecherche.module.css";

const BntFermerRecherche = () => {
  //pour changer de routes
  const navigate = useNavigate();

  return (
    <button
      className={`${style.bntFermerRecherche}`}
      onClick={() => navigate("/")}
      type="button"
    >
      <IoMdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default BntFermerRecherche;
