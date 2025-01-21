import style from "./bntAnnuler.module.css";

const BntAnnuler = () => {
  return (
    <div>
      <button className={`${style.bntAnnuler}`} type="button">
        Annuler
      </button>
    </div>
  );
};

export default BntAnnuler;
