import BntClose from "../../../components/compte/compteInsciption/bntClose/BntClose";
import BntContinue from "../../../components/compte/compteInsciption/bntContinue/BntContinue";
import InputConfirmationMotDePasse from "../../../components/compte/compteInsciption/inputConfirmationMotDePasse/InputConfirmationMotDePasse";
import InputMail from "../../../components/compte/compteInsciption/inputMail/InputMail";
import InputMotDePasse from "../../../components/compte/compteInsciption/inputMotDePasse/InputMotDePasse";
import InputNom from "../../../components/compte/compteInsciption/inputNom/InputNom";
import style from "./compteInsciption.module.css";

const CompteInsciption = () => {
  return (
    <div className={`${style.allPage}`}>
      <div className={`${style.fondModal}`}>
        <div className={`${style.contenerHeder}`}>
          <img
            className={`${style.imgLogo}`}
            src="/images/Cinestream.png"
            alt="logo cinéStream"
          />
          <BntClose />
        </div>
        <form>
          <div className={`${style.contenerInput}`}>
            <InputNom />
            <InputMail />
            <InputMotDePasse />
            <InputConfirmationMotDePasse />
          </div>
          <div className={`${style.contenerBntContinue}`}>
            <BntContinue />
            <p className={`${style.texteExite}`}>
              déja un compte ?{" "}
              <a href="/connection">
                <strong>connection</strong>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompteInsciption;
