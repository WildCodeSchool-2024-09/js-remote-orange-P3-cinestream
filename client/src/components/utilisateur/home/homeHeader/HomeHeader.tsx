import BntFavorie from "./bntFavorie/BntFavorie";
import BntLecture from "./bntLecture/BntLecture";
import DesciptionAnonce from "./desciptionAnonce/DesciptionAnonce";
import style from "./homeHeader.module.css";
import Point from "./point/Point";

const HomeHeader = () => {
  return (
    <div className={`${style.homeHeader}`}>
      {/* nave barre a mettre */}
      {/* fond */}
      <div className={`${style.shadowTop}`} />
      <img
        className={`${style.banniereFilme}`}
        src="https://wallup.net/wp-content/uploads/2019/09/861310-star-wars-force-awakens-sci-fi-disney-action-futuristic-adventure-fighting-1star-wars-force-awakens-poster-1.jpg"
        alt="affiche du filme"
      />
      <div className={`${style.shadowBottom}`} />
      {/* composant */}
      <div className={`${style.contenerToueInfo}`}>
        <DesciptionAnonce />
        <div className={`${style.contenerBouton}`}>
          <BntLecture />
          <BntFavorie />
        </div>
      </div>
      <Point />
    </div>
  );
};

export default HomeHeader;
