import { useState } from "react";
import style from "./InputMotDePasse.module.css";

interface InputMotDePasseProps {
  motDePasse: string;
  setMotDePasse: (value: string) => void;
}

const InputMotDePasse: React.FC<InputMotDePasseProps> = ({
  motDePasse,
  setMotDePasse,
}) => {
  const [cacher, setCacher] = useState(true);

  // permet de changer l'icone des yeux
  function defYeux() {
    if (cacher) {
      return `${style.yeuxMonter}`;
    }
    return `${style.yeuxCacher}`;
  }

  return (
    <div className={`${style.contenerInputMDP}`}>
      <p>Mot de passe</p>
      <div className={`${style.contenerRelatif}`}>
        <input
          type={cacher ? "password" : "text"}
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
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

export default InputMotDePasse;
