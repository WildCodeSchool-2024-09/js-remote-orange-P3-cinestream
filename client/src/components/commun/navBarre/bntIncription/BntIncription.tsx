import { Link } from "react-router-dom";
import style from "./bntIncription.module.css";

const BntIncription = () => {
  return (
    <>
      <Link to="/insciption">
        <button type="button" className={style.signupButton}>
          Inscription
        </button>
      </Link>
    </>
  );
};

export default BntIncription;
