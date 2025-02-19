import style from "./bntPlus.module.css";

interface BntPlusProps {
  compteur: number;
  setCompteur: (value: number) => void;
}

const BntPlus = ({ compteur, setCompteur }: BntPlusProps) => {
  return (
    <div className={`${style.contenerBntPlus}`}>
      <button
        className={`${style.bntPlus}`}
        type="button"
        onClick={() => setCompteur(compteur + 10)}
      >
        Voir plus
      </button>
    </div>
  );
};

export default BntPlus;
