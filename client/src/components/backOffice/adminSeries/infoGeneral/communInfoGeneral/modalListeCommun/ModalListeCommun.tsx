import BntFermerCommun from "../../../../communBackOffice/bntFermerCommun/BntFermerCommun";
import CheckboxModal from "./checkboxModal/CheckboxModal";
import style from "./modalListeCommun.module.css";

interface ModalListeCommunProps {
  listeElement: string[];
  elSelect: string[];
  setElSelect: (elSelect: string[]) => void;
  setModal: (modal: boolean) => void;
}

const ModalListeCommun = ({
  listeElement,
  setModal,
}: ModalListeCommunProps) => {
  return (
    <div className={`${style.shadow}`}>
      <div className={`${style.contour}`}>
        <div className={`${style.conetnerBntFermer}`}>
          <BntFermerCommun action={() => setModal(false)} />
        </div>

        <div className={`${style.allInput}`}>
          {listeElement.map((element, index) => {
            return (
              <CheckboxModal key={element} index={index} element={element} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalListeCommun;
