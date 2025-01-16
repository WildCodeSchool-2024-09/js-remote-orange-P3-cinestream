import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import style from "./bntFermerAdminSerie.module.css";

const BntFermerAdminSerie = () => {
  //pour changer de routes
  const navigate = useNavigate();

  return (
    <button
      className={`${style.bntFermerRecherche}`}
      onClick={() => navigate("/admin/recherche")}
      type="button"
    >
      <IoMdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default BntFermerAdminSerie;
