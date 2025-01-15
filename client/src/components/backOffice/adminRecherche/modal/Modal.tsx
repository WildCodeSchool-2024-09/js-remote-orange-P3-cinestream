import { useNavigate } from "react-router-dom";
import BntFermerModal from "./bntFermerModal/BntFermerModal";
import style from "./modal.module.css";

interface BntFermerModalProps {
  setIsModal: (value: boolean) => void;
}

const Modal = ({ setIsModal }: BntFermerModalProps) => {
  const navigate = useNavigate();

  return (
    <div className={`${style.cacheFond}`}>
      <div className={`${style.contenerModal}`}>
        <BntFermerModal setIsModal={setIsModal} />
        <div className={`${style.flexBntFilm}`}>
          <button
            className={`${style.bntFilm}`}
            onClick={() => navigate("/admin/organisation")}
            type="button"
          >
            Film
          </button>
          <button
            className={`${style.bntFilm}`}
            onClick={() => navigate("/admin/organisation")}
            type="button"
          >
            Serie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
