import type React from "react";
import BntConnection from "./bntConnection/BntConnection";
import BntIncription from "./bntIncription/BntIncription";
import BntRecherche from "./bntRecherche/BntRecherche";
import style from "./navBarre.module.css";

const NavBarre: React.FC = () => {
  return (
    <div className={style.contenerNavBarre}>
      <div className={style.navBarre}>
        {/* Logo à gauche */}
        <div className={style.logo}>
          <img src="/images/Cinestream.png" alt="Cinestream Logo" />
        </div>

        {/* Conteneur des boutons à droite */}
        <div className={style.buttons}>
          <BntRecherche />
          <BntIncription />
          <BntConnection />
        </div>
      </div>
    </div>
  );
};

export default NavBarre;
