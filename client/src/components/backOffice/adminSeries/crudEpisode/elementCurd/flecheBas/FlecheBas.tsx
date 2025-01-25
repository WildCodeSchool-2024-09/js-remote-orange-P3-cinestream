import { FaArrowDown } from "react-icons/fa6";
import style from "./flecheBas.module.css";

const FlecheBas = () => {
  const handleFlecheBas = (e: React.MouseEvent<HTMLButtonElement>) => {
    //empeche que la div sactive
    e.stopPropagation();
  };

  return (
    <button
      className={`${style.bntAction}`}
      type="button"
      onClick={handleFlecheBas}
    >
      <FaArrowDown className={`${style.iconFleche}`} />
    </button>
  );
};

export default FlecheBas;
