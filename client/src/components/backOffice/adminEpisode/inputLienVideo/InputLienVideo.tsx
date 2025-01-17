import style from "./inputLienVideo.module.css";

const InputLienVideo = () => {
  return (
    <div className={`${style.contenerLienVideo}`}>
      <div className={`${style.contenerInputLienVideo}`}>
        <p className={`${style.PTitreLienVideo}`}>Lien Vidéo</p>
        <input
          className={`${style.InputLienVideo}`}
          type="text"
          placeholder="https://"
        />
      </div>
      <div className={`${style.divIframVideo}`}>
        <p className={`${style.pAppercuVideo}`}>Aperçu vidéo:</p>
        <iframe
          className={`${style.iframVideo}`}
          src="https://www.youtube.com/embed/YBXz0Dg60Uc"
          title="retour video du lien"
        />
      </div>
    </div>
  );
};

export default InputLienVideo;
