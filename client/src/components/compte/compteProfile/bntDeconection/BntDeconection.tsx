import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import style from "./bntDeconection.module.css";

const BntDeconection = () => {
  //pour changer de routes
  const navigate = useNavigate();

  //chager le contexte
  const { setToken, setIsAdmin } = UseTokenContext();

  function handleClick() {
    setIsAdmin(false);
    setToken("");
    navigate("/");
  }

  return (
    <>
      <button
        className={`${style.BntDeconection}`}
        type="button"
        onClick={handleClick}
      >
        Déconnection
      </button>
    </>
  );
};

export default BntDeconection;
