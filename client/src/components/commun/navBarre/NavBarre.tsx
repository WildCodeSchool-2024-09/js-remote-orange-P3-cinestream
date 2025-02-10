import type React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { UseTokenContext } from "../../../context/tokenContext";
import BntAdmin from "./bntAdmin/BntAdmin";
import BntCompte from "./bntCompte/BntCompte";
import BntConnection from "./bntConnection/BntConnection";
import BntIncription from "./bntIncription/BntIncription";
import BntRecherche from "./bntRecherche/BntRecherche";
import style from "./navBarre.module.css";
import Routes from "./routes/Routes";

const NavBarre: React.FC = () => {
  //utiliser le contexte
  const { token, isAdmin } = UseTokenContext();
  const [menu, setMenu] = useState(false);

  return (
    <div className={style.contenerNavBarre}>
      {/* naveBarre pc */}
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

      {/* naveBarre telphonne */}
      <div className={style.navBarreMobile}>
        {/* Logo à gauche */}
        <div className={style.logo}>
          <Link to={"/"}>
            <img src="/images/logo/Cinestream.png" alt="Cinestream Logo" />
          </Link>
        </div>

        <button
          className={style.bntMenuBurger}
          onClick={() => setMenu(!menu)}
          type="button"
        >
          {!menu ? (
            <TiThMenu className={style.IconMenuBurger} />
          ) : (
            <IoMdClose className={style.IconMenuBurger} />
          )}
        </button>
      </div>
      {/* menu burger */}
      {menu && (
        <div className={style.burger}>
          <div className={style.boutonMobile}>
            <BntRecherche />
            {token && <BntCompte />}
            {isAdmin && <BntAdmin />}
          </div>
          {!token && <BntIncription />}
          {!token && <BntConnection />}
          <Routes />
        </div>
      )}
    </div>
  );
};

export default NavBarre;
