import { useState } from "react";
import BntAjouter from "../../../components/backOffice/adminRecherche/bntAjouter/BntAjouter";
import BntFermerRecherche from "../../../components/backOffice/adminRecherche/bntFermerRecherche/BntFermerRecherche";
import ListeSeries from "../../../components/backOffice/adminRecherche/listeSeries/ListeSeries";
import Modal from "../../../components/backOffice/adminRecherche/modal/Modal";
import Recherche from "../../../components/backOffice/adminRecherche/recherche/Recherche";
import style from "./adminRecherche.module.css";

const AdminRecherche = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {!isModal && (
        <div className={`${style.bodyPage}`}>
          <div className={`${style.flexTitreCroix}`}>
            <p className={`${style.pTitre}`}>Liste des Séries</p>
            <BntFermerRecherche />
          </div>
          <Recherche />
          <ListeSeries />
          <BntAjouter setIsModal={setIsModal} />
        </div>
      )}
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  );
};

export default AdminRecherche;
