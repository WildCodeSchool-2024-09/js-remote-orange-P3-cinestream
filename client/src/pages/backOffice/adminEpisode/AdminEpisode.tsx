import BntFermerAdminEpisode from "../../../components/backOffice/adminEpisode/bntFermerAdminEpisode/BntFermerAdminEpisode";
import InputDescriptionEpisode from "../../../components/backOffice/adminEpisode/inputDescriptionEpisode/InputDescriptionEpisode";
import InputImageHaurisontal from "../../../components/backOffice/adminEpisode/inputImageHaurisontal/InputImageHaurisontal";
import InputLienVideo from "../../../components/backOffice/adminEpisode/inputLienVideo/InputLienVideo";
import InputTitreEpisode from "../../../components/backOffice/adminEpisode/inputTitreEpisode/InputTitreEpisode";
import style from "./adminEpisode.module.css";

const AdminEpisode = () => {
  return (
    <>
      <div className={`${style.bodyPage}`}>
        <div className={`${style.flexTitreFermer}`}>
          <p className={`${style.pTitrePage}`}>Modifier l'Épisode</p>
          <BntFermerAdminEpisode />
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
