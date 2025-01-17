import NavBarre from "../../../commun/navBarre/NavBarre";
import BntEdite from "./bntEdite/BntEdite";
import BntFavorie from "./bntFavorie/BntFavorie";
import BntPartager from "./bntPartager/BntPartager";
import BntRegarder from "./bntRegarder/BntRegarder";
import DescriptionPresentation from "./descriptionPresentation/DescriptionPresentation";
import style from "./presentationHeader.module.css";

const PresentationHeader = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.navbarre}>
          <NavBarre />
        </div>
        <div className={style.descriptionPresentation}>
          <DescriptionPresentation
            type="film"
            title="JUMANJI"
            season="Saison 1"
            description="2017 - action, aventure, comédie"
          />
        </div>
        <div className={style.bntRegarder}>
          <BntRegarder />
        </div>
        <div className={style.bntContainer}>
          <BntEdite />
          <BntPartager />
          <BntFavorie />
        </div>
      </header>
      <div>
        <p className={style.paragraphWhite}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          sapiente impedit esse reiciendis, officia eius? Ad magni illo dolorem
          repellendus recusandae ut quae iure exercitationem dignissimos quia
          repudiandae officia amet voluptate minima assumenda, quo consectetur!
          Blanditiis culpa at ex numquam?
        </p>
      </div>
    </>
  );
};

export default PresentationHeader;
