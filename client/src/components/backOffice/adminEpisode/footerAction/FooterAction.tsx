import BntAnnuler from "./bntAnnuler/BntAnnuler";
import BntSaugarder from "./bntSaugarder/BntSaugarder";
import BntSupprimer from "./bntSupprimer/BntSupprimer";
import style from "./footerAction.module.css";

interface FooterActionProps {
  updateEpisode: () => Promise<boolean>;
}

const FooterAction = ({ updateEpisode }: FooterActionProps) => {
  return (
    <div className={`${style.contenerFix}`}>
      <BntSupprimer />
      <div className={`${style.flexGauche}`}>
        <BntAnnuler />
        <BntSaugarder updateEpisode={updateEpisode} />
      </div>
    </div>
  );
};

export default FooterAction;
