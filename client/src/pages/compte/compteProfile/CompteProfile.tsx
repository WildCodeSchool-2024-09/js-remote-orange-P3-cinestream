import Footer from "../../../components/commun/footer/Footer";
import BntAvatar from "../../../components/compte/compteProfile/bntAvatar/BntAvatar";
import BntDeconection from "../../../components/compte/compteProfile/bntDeconection/BntDeconection";
import BntSauvgarde from "../../../components/compte/compteProfile/bntSauvgarde/BntSauvgarde";
import InputNom from "../../../components/compte/compteProfile/inputNom/InputNom";
import OffreAbonement from "../../../components/compte/compteProfile/offreAbonement/OffreAbonement";

import style from "./CompteProfile.module.css";

const CompteProfile = () => {
  return (
    <div>
      <div className={`${style.contenerHeder}`}>
        <p className={`${style.pTitrePage}`}>Votre profil</p>
        <div className={`${style.flexBnt}`}>
          <BntSauvgarde />
          <BntDeconection />
        </div>
      </div>
      <div className={`${style.contenerBody}`}>
        <BntAvatar />
        <InputNom />
        <OffreAbonement />
        <Footer />
      </div>
    </div>
  );
};

export default CompteProfile;
