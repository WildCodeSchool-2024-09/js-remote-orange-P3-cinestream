import type React from "react";
import { useSearchParams } from "react-router-dom";
import style from "./bntAjouter.module.css";

interface BntAjouterProps {
  setIsModal: (value: boolean) => void;
}

const BntAjouter: React.FC<BntAjouterProps> = ({ setIsModal }) => {
  const [searchParams] = useSearchParams();
  const paramsMode = searchParams.get("mode");

  // paramsMode !== "addUnivers" &&
  return (
    <>
      {paramsMode !== "addUnivers" ? (
        <button
          className={`${style.bntAjouter}`}
          onClick={() => setIsModal(true)}
          type="button"
        >
          Ajouter une série
        </button>
      ) : (
        <div className={`${style.espaceBas}`} />
      )}
    </>
  );
};

export default BntAjouter;
