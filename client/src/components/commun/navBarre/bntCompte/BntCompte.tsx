import { Link } from "react-router-dom";
import style from "./BntCompte.module.css";

const BntCompte = () => {
  return (
    <>
      <Link to={"/compte"}>
        <div className={`${style.divIconCompte}`} />
      </Link>
    </>
  );
};

export default BntCompte;
