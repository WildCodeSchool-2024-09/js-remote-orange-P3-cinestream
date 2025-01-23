import CrudEpisode from "../../../components/backOffice/adminSeries/crudEpisode/CrudEpisode";
import CrudUnivers from "../../../components/backOffice/adminSeries/crudUnisers/CrudUnivers";
import InfoGeneral from "../../../components/backOffice/adminSeries/infoGeneral/InfoGeneral";
import style from "./AdminSeries.module.css";

const AdminSeries = () => {
  return (
    <>
      <div className={`${style.bodyPage}`}>
        {/* bnt fermer la page déplacer dans info général */}
        <InfoGeneral />
        <CrudEpisode />
        <CrudUnivers />
      </div>
    </>
  );
};

export default AdminSeries;
