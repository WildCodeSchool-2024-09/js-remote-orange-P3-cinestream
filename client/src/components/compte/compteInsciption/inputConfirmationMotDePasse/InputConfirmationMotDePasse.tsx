import { useState } from "react";
import style from "./inputConfirmationMotDePasse.module.css";

interface ValideProps {
  nom: boolean;
  email: boolean;
  motDePasse: boolean;
  motDePasse2: boolean;
}

interface Props {
  motDePasse2: string;
  setMotDePasse2: (value: string) => void;
  valide: ValideProps;
}

const InputConfirmationMotDePasse: React.FC<Props> = ({
  motDePasse2,
  setMotDePasse2,
  valide,
}) => {
  const [cacher, setCacher] = useState(true);

  // permet de changer l'icone des yeux
  function defYeux() {
    if (cacher) {
      return `${style.yeuxMonter}`;
    }
    return `${style.yeuxCacher}`;
  }

  //verifie si le mot de passe est valide
  // défnir la classe
  function defClass() {
    if (valide.motDePasse2) {
      return `${style.focusVert}`;
    }
    return `${style.focusRouge}`;
  }

  return (
    <div className={`${style.contenerInputMDPConfirmation}`}>
      <p>Confirmer mot de passe</p>
      <div className={`${style.contenerRelatif}`}>
        <input
          className={defClass()}
          type={cacher ? "password" : "text"}
          placeholder="Confirmer mot de passe"
          value={motDePasse2}
          onChange={(e) => setMotDePasse2(e.target.value)}
        />
        <button
          className={defYeux()}
          type="button"
          onClick={() => setCacher(!cacher)}
        />
      </div>
    </div>
  );
};

export default InputConfirmationMotDePasse;
