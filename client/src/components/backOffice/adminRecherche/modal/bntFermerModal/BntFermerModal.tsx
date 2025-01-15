import { IoMdClose } from "react-icons/io";
import style from "./bntFermerModal.module.css";

interface BntFermerModalProps {
  setIsModal: (value: boolean) => void;
}

const BntFermerModal = ({ setIsModal }: BntFermerModalProps) => {
  return (
    <button
      className={`${style.bntFermerRecherche}`}
      onClick={() => setIsModal(false)}
      type="button"
    >
      <IoMdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default BntFermerModal;
