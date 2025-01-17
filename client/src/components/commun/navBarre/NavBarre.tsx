import type React from "react";
import { UseTokenContext } from "../../../context/tokenContext";
import BntAdmin from "./bntAdmin/BntAdmin";
import BntCompte from "./bntCompte/BntCompte";
import BntConnection from "./bntConnection/BntConnection";
import BntIncription from "./bntIncription/BntIncription";
import BntRecherche from "./bntRecherche/BntRecherche";
import style from "./navBarre.module.css";
import Routes from "./routes/Routes";
import { Link } from "react-router-dom";

const NavBarre: React.FC = () => {
  //utiliser le contexte
  const { token, isAdmin } = UseTokenContext();

  return (
    <div className={style.contenerNavBarre}>
      <div className={style.navBarre}>
        {/* Logo à gauche */}
        <div className={style.logo}>
          <Link to={"/"}>
            <img src="/images/logo/Cinestream.png" alt="Cinestream Logo" />
          </Link>
        </div>

        <Routes />

        {/* Conteneur des boutons à droite */}
        <div className={style.buttons}>
          <BntRecherche />
          {!token && <BntIncription />}
          {!token && <BntConnection />}
          {token && <BntCompte />}
          {isAdmin && <BntAdmin />}
        </div>
      </div>
    </div>
  );
};

export default NavBarre;
