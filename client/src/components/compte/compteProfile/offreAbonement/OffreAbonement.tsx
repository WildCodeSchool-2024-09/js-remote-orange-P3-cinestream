import BntUpgrade from "./bntUpgrade/BntUpgrade";
import style from "./offreAbonement.module.css";

interface OffreAbonementProps {
  abonement: boolean;
  setAbonement: (value: boolean) => void;
  dateAbonement: string;
  setDateAbonement: (value: string) => void;
}
const OffreAbonement = ({
  abonement,
  setAbonement,
  dateAbonement,
  setDateAbonement,
}: OffreAbonementProps) => {
  return (
    <div className={`${style.contenerAllOffre}`}>
      <div className={`${style.carte} ${!abonement && style.carteSelect}`}>
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
      <div className={`${style.carte} ${abonement && style.carteSelect}`}>
        <div className={`${style.flexAbonementTitre}`}>
          <p className={`${style.abonementTitre}`}>Premium</p>
          <img
            src={
              abonement
                ? "/images/logo/iconOptenu.png"
                : "/images/logo/premium.png"
            }
            alt="icon abonement"
          />
        </div>
        <div className={`${style.separator}`} />
        <div className={`${style.contenerListeAvantage}`}>
          <p className={`${style.avantage}`}>- Accès ilimiter au catalogue</p>
          <p className={`${style.prix}`}>- 2€ / mois</p>
        </div>
        <BntUpgrade
          abonement={abonement}
          setAbonement={setAbonement}
          dateAbonement={dateAbonement}
          setDateAbonement={setDateAbonement}
        />
      </div>
    </div>
  );
};

export default OffreAbonement;
