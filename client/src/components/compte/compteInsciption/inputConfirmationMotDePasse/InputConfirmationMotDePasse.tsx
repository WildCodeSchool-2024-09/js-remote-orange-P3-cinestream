import { useState } from "react";
import style from "./InputConfirmationMotDePasse.module.css";

interface Props {
  motDePasse2: string;
  setMotDePasse2: (value: string) => void;
}

const InputConfirmationMotDePasse: React.FC<Props> = ({
  motDePasse2,
  setMotDePasse2,
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
    <div className={`${style.contenerInputMDPConfirmation}`}>
      <p>Confirmer mot de passe</p>
      <div className={`${style.contenerRelatif}`}>
        <input
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
