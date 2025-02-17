import { useEffect, useState } from "react";
import style from "./inputNom.module.css";

interface InputNomProps {
  spedo: string;
  setSpedo: (value: string) => void;
}

const InputNom = ({ spedo, setSpedo }: InputNomProps) => {
  const [nomcorrect, setNomcorrect] = useState(false);

  function defClasse() {
    if (nomcorrect) {
      return `${style.inputNom} ${style.inputNomCorrect}`;
    }
    return `${style.inputNom}`;
  }

  function verifNom() {
    if (
      /^[a-zA-Z0-9_-]+$/.test(spedo) &&
      spedo.length >= 4 &&
      spedo.length <= 30
    ) {
      setNomcorrect(true);
    } else {
      setNomcorrect(false);
    }
  }

  //a chaque changement de spedo on verifie
  // biome-ignore lint/correctness/useExhaustiveDependencies : ca met le bazard
  useEffect(() => {
    verifNom();
  }, [spedo]);

  return (
    <div className={`${style.contenerRename}`}>
      <p className={`${style.ptexteNom}`}>Pseudo</p>
      <input
        className={defClasse()}
        type="text"
        placeholder="Pseudo"
        value={spedo}
        onChange={(e) => setSpedo(e.target.value)}
      />
    </div>
  );
};

export default InputNom;
