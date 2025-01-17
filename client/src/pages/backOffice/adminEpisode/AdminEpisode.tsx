import { useNavigate } from "react-router-dom";
import InputDescriptionEpisode from "../../../components/backOffice/adminEpisode/inputDescriptionEpisode/InputDescriptionEpisode";
import InputImageHaurisontal from "../../../components/backOffice/adminEpisode/inputImageHaurisontal/InputImageHaurisontal";
import InputLienVideo from "../../../components/backOffice/adminEpisode/inputLienVideo/InputLienVideo";
import InputTitreEpisode from "../../../components/backOffice/adminEpisode/inputTitreEpisode/InputTitreEpisode";
import BntFermerCommun from "../../../components/backOffice/communBackOffice/bntFermerCommun/BntFermerCommun";
import style from "./adminEpisode.module.css";

const AdminEpisode = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${style.bodyPage}`}>
        <div className={`${style.flexTitreFermer}`}>
          <p className={`${style.pTitrePage}`}>Modifier l'Épisode</p>
          <BntFermerCommun action={() => navigate("/admin/organisation")} />
        </div>

        <div className={`${style.contenerSection}`}>
          <InputImageHaurisontal />
          <InputTitreEpisode />
          <InputDescriptionEpisode />
          <InputLienVideo />
        </div>
      </div>
    </>
  );
};

export default AdminEpisode;
