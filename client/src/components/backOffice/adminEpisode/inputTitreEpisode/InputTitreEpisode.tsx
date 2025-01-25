import style from "./inputTitreEpisode.module.css";

interface InputTitreEpisodeProps {
  titre: string;
  setTitre: (titre: string) => void;
}

const InputTitreEpisode = ({ titre, setTitre }: InputTitreEpisodeProps) => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>Nom de l'épisode</p>
      <input
        maxLength={250}
        className={`${style.InputTitreSerie}`}
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
    </div>
  );
};

export default InputTitreEpisode;
