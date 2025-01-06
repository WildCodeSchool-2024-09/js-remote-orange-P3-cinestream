import type React from "react";
import style from "./navBarre.module.css";
import BntIncription from "./bntIncription/BntIncription";
import BntConnection from "./bntConnection/BntConnection";
import BntRecherche from "./bntRecherche/BntRecherche";

const NavBarre: React.FC = () => {
  return (
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
  );
};

export default NavBarre;
