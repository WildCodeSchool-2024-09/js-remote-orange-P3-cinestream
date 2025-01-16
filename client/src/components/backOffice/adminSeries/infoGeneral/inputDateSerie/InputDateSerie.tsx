import style from "./inputDateSerie.module.css";

const InputDateSerie = () => {
  return (
    <div className={`${style.contenerDate}`}>
      <p className={`${style.pTitreDate}`}>Date de sortie</p>
      <input className={`${style.inputDate}`} type="date" />
    </div>
  );
};

export default InputDateSerie;
