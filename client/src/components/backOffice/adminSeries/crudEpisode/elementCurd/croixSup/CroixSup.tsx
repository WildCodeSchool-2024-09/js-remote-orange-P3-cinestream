import { MdClose } from "react-icons/md";
import style from "./croixSup.module.css";

const CroixSup = () => {
  const handleCroixSup = (e: React.MouseEvent<HTMLButtonElement>) => {
    //empeche que la div sactive
    e.stopPropagation();
  };

  return (
    <button
      className={`${style.bntAction}`}
      type="button"
      onClick={handleCroixSup}
    >
      <MdClose className={`${style.iconCroix}`} />
    </button>
  );
};

export default CroixSup;
