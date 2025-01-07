import BntClose from "../../../components/compte/compteConnection/bntClose/BntClose";
import BntConnection from "../../../components/compte/compteConnection/bntConnection/BntConnection";
import InputMail from "../../../components/compte/compteConnection/inputMail/InputMail";
import InputMotDePasse from "../../../components/compte/compteConnection/inputMotDePasse/InputMotDePasse";
import style from "./CompteConnection.module.css";

const CompteConnection = () => {
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
            <InputMail />
            <InputMotDePasse />
          </div>
          <div className={`${style.contenerBntConnection}`}>
            <BntConnection />
            <p className={`${style.texteExite}`}>
              Pas de compte ?{" "}
              <a href="/insciption">
                <strong>crée un compte</strong>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompteConnection;
