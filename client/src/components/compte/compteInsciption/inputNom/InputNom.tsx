import { useEffect } from "react";
import style from "./inputNom.module.css";

interface ValideProps {
  nom: boolean;
  email: boolean;
  motDePasse: boolean;
  motDePasse2: boolean;
}

interface InputNomProps {
  nom: string;
  setNom: (nom: string) => void;
  valide: ValideProps;
  setValide: (valide: ValideProps) => void;
}

const InputNom: React.FC<InputNomProps> = ({
  nom,
  setNom,
  valide,
  setValide,
}) => {
  // verifi que le nom est valide
  function verifNomValide() {
    if (/^[a-zA-Z0-9_-]+$/.test(nom) && nom.length >= 4 && nom.length <= 30) {
      setValide({ ...valide, nom: true });
    } else {
      setValide({ ...valide, nom: false });
    }
  }

  // défnir la classe
  function defClass() {
    if (valide.nom) {
      return `${style.focusVert}`;
    }
    return `${style.focusRouge}`;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies : ca met le bazard
  useEffect(() => {
    verifNomValide();
  }, [nom]);

  return (
    <div className={`${style.contenerInputNom}`}>
      <p>Nom utilisateur</p>
      <input
        className={defClass()}
        type="text"
        placeholder="Nom utilisateur"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
    </div>
  );
};

export default InputNom;
