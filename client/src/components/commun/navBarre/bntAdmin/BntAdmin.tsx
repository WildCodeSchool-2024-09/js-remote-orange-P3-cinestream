import { Link } from "react-router-dom";
import style from "./bntAdmin.module.css";

const BntAdmin = () => {
  return (
    <>
      <Link to={"/admin/recherche"}>
        <div className={`${style.divIconAdmin}`}>
          <p className={`${style.pIconAdmin}`}>👑</p>
        </div>
      </Link>
    </>
  );
};

export default BntAdmin;
