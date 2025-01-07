import { Link } from "react-router-dom";
import style from "./bntConnection.module.css";

const BntConnection = () => {
  return (
    <>
      <Link to="/connection">
        <button type="button" className={style.loginButton}>
          Login
        </button>
      </Link>
    </>
  );
};

export default BntConnection;
