import style from "./bntAjouter.module.css";

import type React from "react";

interface BntAjouterProps {
  setIsModal: (value: boolean) => void;
}

const BntAjouter: React.FC<BntAjouterProps> = ({ setIsModal }) => {
  return (
    <>
      <button
        className={`${style.bntAjouter}`}
        onClick={() => setIsModal(true)}
        type="button"
      >
        Ajouter une série
      </button>
    </>
  );
};

export default BntAjouter;
