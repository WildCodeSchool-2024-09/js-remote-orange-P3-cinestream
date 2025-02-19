import BntFermerCommun from "../../../../communBackOffice/bntFermerCommun/BntFermerCommun";
import CheckboxModal from "./checkboxModal/CheckboxModal";
import style from "./modalListeCommun.module.css";

interface ElementType {
  id: number;
  nom: string;
  image: string;
}

interface ModalListeCommunProps {
  listeElement: ElementType[];
  elementSelect: ElementType[];
  setElementSelect: (
    categorie: { id: number; nom: string; image: string }[],
  ) => void;
  setModal: (value: boolean) => void;
}

const ModalListeCommun = ({
  listeElement,
  elementSelect,
  setElementSelect,
  setModal,
}: ModalListeCommunProps) => {
  return (
    <div className={`${style.shadow}`}>
      <div className={`${style.contour}`}>
        <div className={`${style.conetnerBntFermer}`}>
          <BntFermerCommun action={() => setModal(false)} />
        </div>

        <div className={`${style.allInput}`}>
          {/* map pour affciher une checkbox pour toute les catégorie */}
          {listeElement.map((element, index) => {
            return (
              <CheckboxModal
                key={element.id}
                index={index}
                element={element}
                elementSelect={elementSelect}
                setElementSelect={setElementSelect}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalListeCommun;
