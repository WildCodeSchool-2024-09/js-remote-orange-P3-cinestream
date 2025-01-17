import { useNavigate } from "react-router-dom";
import CrudEpisode from "../../../components/backOffice/adminSeries/crudEpisode/CrudEpisode";
import CrudUnivers from "../../../components/backOffice/adminSeries/crudUnisers/CrudUnivers";
import InfoGeneral from "../../../components/backOffice/adminSeries/infoGeneral/InfoGeneral";
import BntFermerCommun from "../../../components/backOffice/communBackOffice/bntFermerCommun/BntFermerCommun";
import style from "./AdminSeries.module.css";

const AdminSeries = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${style.bodyPage}`}>
        <div className={`${style.flexTitreFermer}`}>
          <p className={`${style.pTitrePage}`}>Modifier la Série</p>
          <BntFermerCommun action={() => navigate("/admin/recherche")} />
        </div>
        <InfoGeneral />
        <CrudEpisode />
        <CrudUnivers />
      </div>
    </>
  );
};

export default AdminSeries;
