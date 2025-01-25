import style from "./inputDescriptionEpisode.module.css";

interface InputDescriptionEpisodeProps {
  description: string;
  setDescription: (description: string) => void;
}

const InputDescriptionEpisode = ({
  description,
  setDescription,
}: InputDescriptionEpisodeProps) => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>Description de l'épisode</p>
      <textarea
        className={`${style.InputTitreSerie}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default InputDescriptionEpisode;
