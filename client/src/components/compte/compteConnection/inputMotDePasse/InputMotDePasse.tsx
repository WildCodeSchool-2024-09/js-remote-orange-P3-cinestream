import type React from "react";
import { useEffect, useState } from "react";
import style from "./inputMotDePasse.module.css";

interface ValideProps {
  email: boolean;
  motDePasse: boolean;
}

interface MotDePasseProps {
  motDePasse: string;
  setMotDePasse: (motDePasse: string) => void;
  valide: ValideProps;
  setValide: (valide: ValideProps) => void;
}
const InputMotDePasse: React.FC<MotDePasseProps> = ({
  motDePasse,
  setMotDePasse,
  valide,
  setValide,
}) => {
  const [cacher, setCacher] = useState(true);

  // permet de changer l'icone des yeux
  function defYeux() {
    if (cacher) {
      return `${style.yeuxMonter}`;
    }
    return `${style.yeuxCacher}`;
  }

  // gestion de la validation du mot de passe
  function verifMotDePasseValide() {
    //set si le mot de passe est valide
    if (
      /^\S+$/.test(motDePasse) &&
      motDePasse.length >= 8 &&
      motDePasse.length <= 50
    ) {
      setValide({ ...valide, motDePasse: true });
    } else {
      setValide({ ...valide, motDePasse: false });
    }
  }

  // défnir la classe
  function defClass() {
    if (valide.motDePasse) {
      return `${style.focusVert}`;
    }
    return `${style.focusRouge}`;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies : ca met le bazard
  useEffect(() => {
    verifMotDePasseValide();
  }, [motDePasse]);

  return (
    <div className={`${style.contenerInputMDP}`}>
      <p>Mot de passe</p>
      <div className={`${style.contenerRelatif}`}>
        <input
          className={defClass()}
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
