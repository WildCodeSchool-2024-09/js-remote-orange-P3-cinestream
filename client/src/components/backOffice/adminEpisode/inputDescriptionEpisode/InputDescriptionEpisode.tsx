import style from "./inputDescriptionEpisode.module.css";

const InputDescriptionEpisode = () => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>Description de l'épisode</p>
      <textarea className={`${style.InputTitreSerie}`} />
    </div>
  );
};

export default InputDescriptionEpisode;
