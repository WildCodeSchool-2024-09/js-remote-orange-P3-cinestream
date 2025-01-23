import BntAnnuler from "./bntAnnuler/BntAnnuler";
import BntSaugarder from "./bntSaugarder/BntSaugarder";
import BntSupprimer from "./bntSupprimer/BntSupprimer";
import style from "./footerAction.module.css";

interface FooterActionProps {
  updateInfoGeneral: () => Promise<boolean>;
}

const FooterAction = ({ updateInfoGeneral }: FooterActionProps) => {
  return (
    <div className={`${style.contenerFix}`}>
      <BntSupprimer />
      <div className={`${style.flexGauche}`}>
        <BntAnnuler />
        <BntSaugarder updateInfoGeneral={updateInfoGeneral} />
      </div>
    </div>
  );
};

export default FooterAction;
