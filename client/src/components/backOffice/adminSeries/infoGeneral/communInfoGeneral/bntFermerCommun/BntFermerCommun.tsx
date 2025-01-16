import { IoMdClose } from "react-icons/io";
import style from "./bntFermerCommun.module.css";

interface BntFermerCommunProps {
  setModal: (modal: boolean) => void;
}

const BntFermerCommun = ({ setModal }: BntFermerCommunProps) => {
  return (
    <button
      className={`${style.bntFermerRecherche}`}
      onClick={() => setModal(false)}
      type="button"
    >
      <IoMdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default BntFermerCommun;
