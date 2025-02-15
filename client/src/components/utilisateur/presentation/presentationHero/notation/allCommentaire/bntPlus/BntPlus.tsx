import styles from "./bntPlus.module.css";

interface BntPlusProps {
  compteur: number;
  setCompteur: (value: number) => void;
}

const BntPlus = ({ compteur, setCompteur }: BntPlusProps) => {
  const handleOnClickBnyPlus = () => {
    setCompteur(compteur + 8);
  };
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={handleOnClickBnyPlus}
      >
        afficher plus
      </button>
    </div>
  );
};

export default BntPlus;
