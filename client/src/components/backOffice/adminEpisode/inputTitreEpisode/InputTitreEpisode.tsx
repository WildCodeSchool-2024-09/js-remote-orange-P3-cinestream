import style from "./inputTitreEpisode.module.css";

const InputTitreEpisode = () => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>Nom de l'épisode</p>
      <input className={`${style.InputTitreSerie}`} type="text" />
    </div>
  );
};

export default InputTitreEpisode;
