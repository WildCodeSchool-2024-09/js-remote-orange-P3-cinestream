import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import style from "./bntFermerAdminEpisode.module.css";

const BntFermerAdminEpisode = () => {
  //pour changer de routes
  const navigate = useNavigate();

  return (
    <button
      className={`${style.bntFermerRecherche}`}
      onClick={() => navigate("/admin/organisation")}
      type="button"
    >
      <IoMdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default BntFermerAdminEpisode;
