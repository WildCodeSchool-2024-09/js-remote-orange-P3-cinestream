import { useState } from "react";
import ModalListeCommun from "../communInfoGeneral/modalListeCommun/ModalListeCommun";
import style from "./listeCategorie.module.css";

const ListeCategorie = () => {
  const [modal, setModal] = useState(false);
  const [elSelect, setElSelect] = useState([] as string[]);

  const listeElement = [
    "ACTION",
    "FANTASTIQUE",
    "DROLE",
    "fiction",
    "documentaire",
    "d'animation",
    "expérimentations",
    "ACTION",
    "FANTASTIQUE",
    "DROLE",
    "fiction",
    "documentaire",
    "d'animation",
    "expérimentations",
  ];

  return (
    <>
      {modal && (
        <ModalListeCommun
          listeElement={listeElement}
          elSelect={elSelect}
          setElSelect={setElSelect}
          setModal={setModal}
        />
      )}
      <div className={`${style.flexContainer}`}>
        <p className={`${style.pTitreInput}`}>Categorie</p>

        <div
          className={`${style.divContour}`}
          onClick={() => setModal(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setModal(true);
            }
          }}
        >
          {elSelect.map((element) => {
            return (
              <p key={element} className={`${style.pElement}`}>
                {element}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListeCategorie;
