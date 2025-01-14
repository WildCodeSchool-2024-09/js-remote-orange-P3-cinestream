import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import style from "./bntSauvgarde.module.css";

const BntSauvgarde = () => {
  //pour changer de routes
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <button
        className={`${style.bntSauvgarde}`}
        type="button"
        onClick={handleClick}
      >
        <FaCheck />
        Sauvgarder
      </button>
    </>
  );
};

export default BntSauvgarde;
