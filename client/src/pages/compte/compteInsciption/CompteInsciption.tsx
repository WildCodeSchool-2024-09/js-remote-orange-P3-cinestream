import { useState } from "react";
import BntClose from "../../../components/compte/compteInsciption/bntClose/BntClose";
import BntContinue from "../../../components/compte/compteInsciption/bntContinue/BntContinue";
import InputConfirmationMotDePasse from "../../../components/compte/compteInsciption/inputConfirmationMotDePasse/InputConfirmationMotDePasse";
import InputMail from "../../../components/compte/compteInsciption/inputMail/InputMail";
import InputMotDePasse from "../../../components/compte/compteInsciption/inputMotDePasse/InputMotDePasse";
import InputNom from "../../../components/compte/compteInsciption/inputNom/InputNom";
import style from "./compteInsciption.module.css";

const CompteInsciption = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [motDePasse2, setMotDePasse2] = useState("");
  const [messageErreur, setMessageErreur] = useState("");
  // savoir si les champs repsectent les conditions
  const [valide, setValide] = useState({
    nom: false,
    email: false,
    motDePasse: false,
    motDePasse2: false,
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
            <InputNom
              nom={nom}
              setNom={setNom}
              valide={valide}
              setValide={setValide}
            />
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
              motDePasse2={motDePasse2}
            />
            <InputConfirmationMotDePasse
              motDePasse2={motDePasse2}
              setMotDePasse2={setMotDePasse2}
              valide={valide}
            />
          </div>
          <div className={`${style.contenerBntContinue}`}>
            <BntContinue
              valide={valide}
              messageErreur={messageErreur}
              setMessageErreur={setMessageErreur}
              nom={nom}
              email={email}
              motDePasse={motDePasse}
              motDePasse2={motDePasse2}
            />
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
