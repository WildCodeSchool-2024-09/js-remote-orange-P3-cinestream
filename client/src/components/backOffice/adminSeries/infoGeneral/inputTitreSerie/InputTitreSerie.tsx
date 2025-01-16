import style from "./inputTitreSerie.module.css";

const InputTitreSerie = () => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>Titre de la série</p>
      <input className={`${style.InputTitreSerie}`} type="text" />
    </div>
  );
};

export default InputTitreSerie;
