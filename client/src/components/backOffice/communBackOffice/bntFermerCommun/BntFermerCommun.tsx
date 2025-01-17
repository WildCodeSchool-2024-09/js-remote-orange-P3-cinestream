import { IoMdClose } from "react-icons/io";
import style from "./bntFermerCommun.module.css";

interface Interfac {
  action: () => void;
}

const BntFermerCommun = ({ action }: Interfac) => {
  return (
    <button
      className={`${style.bntFermerRecherche}`}
      onClick={() => action()}
      type="button"
    >
      <IoMdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default BntFermerCommun;
