import { useState } from "react";
import BntClose from "../../../components/compte/compteConnection/bntClose/BntClose";
import BntConnection from "../../../components/compte/compteConnection/bntConnection/BntConnection";
import InputMail from "../../../components/compte/compteConnection/inputMail/InputMail";
import InputMotDePasse from "../../../components/compte/compteConnection/inputMotDePasse/InputMotDePasse";
import style from "./compteConnection.module.css";

const CompteConnection = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [messageErreur, setMessageErreur] = useState("");
  // state pour valider les champs
  const [valide, setValide] = useState({
    email: false,
    motDePasse: false,
  });

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
            <InputMail
              email={email}
              setEmail={setEmail}
              valide={valide}
              setValide={setValide}
            />
            <InputMotDePasse
              motDePasse={motDePasse}
              setMotDePasse={setMotDePasse}
              valide={valide}
              setValide={setValide}
            />
          </div>
          <div className={`${style.contenerBntConnection}`}>
            <BntConnection
              valide={valide}
              email={email}
              motDePasse={motDePasse}
              messageErreur={messageErreur}
              setMessageErreur={setMessageErreur}
            />
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
