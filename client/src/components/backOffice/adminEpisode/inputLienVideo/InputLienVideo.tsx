import style from "./inputLienVideo.module.css";

interface InputLienVideoProps {
  video: string;
  setVideo: (video: string) => void;
}

const InputLienVideo = ({ video, setVideo }: InputLienVideoProps) => {
  return (
    <div className={`${style.contenerLienVideo}`}>
      <div className={`${style.contenerInputLienVideo}`}>
        <p className={`${style.PTitreLienVideo}`}>Lien Vidéo</p>
        <input
          className={`${style.InputLienVideo}`}
          type="text"
          placeholder="https://"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          maxLength={250}
        />
      </div>
      <div className={`${style.divIframVideo}`}>
        <p className={`${style.pAppercuVideo}`}>Aperçu vidéo:</p>
        <iframe
          className={`${style.iframVideo}`}
          src="https://www.youtube.com/embed/_J5bj-sFS4Y"
          title="retour video du lien"
        />
      </div>
    </div>
  );
};

export default InputLienVideo;
