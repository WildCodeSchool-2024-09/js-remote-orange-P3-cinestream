import { Link } from "react-router-dom";
import style from "./bntClose.module.css";

const BntClose = () => {
  return (
    <>
      <Link to="/">
        <button className={`${style.bntClose}`} type="button">
          Fermer
        </button>
      </Link>
    </>
  );
};

export default BntClose;
