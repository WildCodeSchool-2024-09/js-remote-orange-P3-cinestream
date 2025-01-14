import style from "./OffreAbonement.module.css";
import BntUpgrade from "./bntUpgrade/BntUpgrade";

const OffreAbonement = () => {
  return (
    <div className={`${style.contenerAllOffre}`}>
      <div className={`${style.carte}`}>
        <div className={`${style.flexAbonementTitre}`}>
          <p className={`${style.abonementTitre}`}>Gratuit</p>
          <img src="/images/logo/iconOptenu.png" alt="icon abonement" />
        </div>
        <div className={`${style.separator}`} />
        <div className={`${style.contenerListeAvantage}`}>
          <p className={`${style.avantage}`}>- Accès limiter au catalogue</p>
          <p className={`${style.prix}`}>- Gratuit</p>
        </div>
      </div>
      <div className={`${style.carte}`}>
        <div className={`${style.flexAbonementTitre}`}>
          <p className={`${style.abonementTitre}`}>Premuium</p>
          <img src="/images/logo/premium.png" alt="icon abonement" />
        </div>
        <div className={`${style.separator}`} />
        <div className={`${style.contenerListeAvantage}`}>
          <p className={`${style.avantage}`}>- Accès ilimiter au catalogue</p>
          <p className={`${style.prix}`}>- 2€ / mois</p>
        </div>
        <BntUpgrade />
      </div>
    </div>
  );
};

export default OffreAbonement;
