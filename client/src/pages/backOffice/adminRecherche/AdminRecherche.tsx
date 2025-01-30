import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BntAjouter from "../../../components/backOffice/adminRecherche/bntAjouter/BntAjouter";
import ListeSeries from "../../../components/backOffice/adminRecherche/listeSeries/ListeSeries";
import Modal from "../../../components/backOffice/adminRecherche/modal/Modal";
import Recherche from "../../../components/backOffice/adminRecherche/recherche/Recherche";
import BntFermerCommun from "../../../components/backOffice/communBackOffice/bntFermerCommun/BntFermerCommun";
import style from "./adminRecherche.module.css";

const AdminRecherche = () => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  //gestion du mode addUnivers
  const paramsMode = searchParams.get("mode");
  const paramsUniversIdA = searchParams.get("universIdA");

  //les state des input et series
  const [recherche, setRecherche] = useState("");

  const handleClickFermer = () => {
    //si on est en mode addUnivers on navigue vers la page univers
    if (paramsMode === "addUnivers") {
      navigate(`/admin/organisation/${paramsUniversIdA}`);
      return;
    }
    navigate("/");
  };

  return (
    <>
      {!isModal && (
        <div className={`${style.bodyPage}`}>
          <div className={`${style.flexTitreCroix}`}>
            <p className={`${style.pTitre}`}>Liste des Séries</p>
            <BntFermerCommun action={handleClickFermer} />
          </div>
          <Recherche recherche={recherche} setRecherche={setRecherche} />
          <ListeSeries recherche={recherche} />
          <BntAjouter setIsModal={setIsModal} />
        </div>
      )}
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  );
};

export default AdminRecherche;
