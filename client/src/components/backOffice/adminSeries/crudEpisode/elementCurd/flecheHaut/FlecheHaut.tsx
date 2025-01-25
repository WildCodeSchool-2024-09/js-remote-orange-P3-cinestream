import { FaArrowUp } from "react-icons/fa6";
import style from "./flecheHaut.module.css";

const FlecheHaut = () => {
  const handleFlecheHaut = (e: React.MouseEvent<HTMLButtonElement>) => {
    //empeche que la div sactive
    e.stopPropagation();
  };

  return (
    <button
      className={`${style.bntAction}`}
      type="button"
      onClick={handleFlecheHaut}
    >
      <FaArrowUp className={`${style.iconFleche}`} />
    </button>
  );
};

export default FlecheHaut;
