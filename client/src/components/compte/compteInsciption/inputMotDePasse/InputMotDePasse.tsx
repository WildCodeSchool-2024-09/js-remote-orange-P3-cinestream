import { useState } from "react";
import { useEffect } from "react";
import style from "./inputMotDePasse.module.css";

interface ValideProps {
  nom: boolean;
  email: boolean;
  motDePasse: boolean;
  motDePasse2: boolean;
}

interface InputMotDePasseProps {
  motDePasse: string;
  setMotDePasse: (value: string) => void;
  valide: ValideProps;
  setValide: (valide: ValideProps) => void;
  motDePasse2: string;
}

const InputMotDePasse: React.FC<InputMotDePasseProps> = ({
  motDePasse,
  setMotDePasse,
  valide,
  setValide,
  motDePasse2,
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
  // verifi que le nom est valide
  function verifMotDePasseValide() {
    let isMotDePasse = false;
    let isMotDePasse2 = false;
    //set si le mot de passe est valide
    if (
      /^\S+$/.test(motDePasse) &&
      motDePasse.length >= 8 &&
      motDePasse.length <= 50
    ) {
      isMotDePasse = true;
    }

    //set si le 2eme mot de passe est identique
    if (motDePasse === motDePasse2 && valide.motDePasse) {
      isMotDePasse2 = true;
    }

    // mis a jour des 2 etat valide (mdp et mdp2)
    setValide({
      ...valide,
      motDePasse: isMotDePasse,
      motDePasse2: isMotDePasse2,
    });
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
  }, [motDePasse, motDePasse2]);

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
