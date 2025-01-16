import CrudEpisode from "../../../components/backOffice/adminSeries/crudEpisode/CrudEpisode";
import CrudUnivers from "../../../components/backOffice/adminSeries/crudUnisers/CrudUnivers";
import InfoGeneral from "../../../components/backOffice/adminSeries/infoGeneral/InfoGeneral";
import BntFermerAdminSerie from "../../../components/backOffice/adminSeries/infoGeneral/bntFermerAdminSerie/BntFermerAdminSerie";
import style from "./AdminSeries.module.css";

const AdminSeries = () => {
  return (
    <>
      <div className={`${style.bodyPage}`}>
        <div className={`${style.flexTitreFermer}`}>
          <p className={`${style.pTitrePage}`}>Modifier la Série</p>
          <BntFermerAdminSerie />
        </div>
        <InfoGeneral />
        <CrudEpisode />
        <CrudUnivers />
      </div>
    </>
  );
};

export default AdminSeries;
