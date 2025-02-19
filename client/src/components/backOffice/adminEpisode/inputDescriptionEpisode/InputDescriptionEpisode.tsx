import style from "./inputDescriptionEpisode.module.css";

interface InputDescriptionEpisodeProps {
  description: string;
  setDescription: (description: string) => void;
  type: string;
}

const InputDescriptionEpisode = ({
  description,
  setDescription,
  type,
}: InputDescriptionEpisodeProps) => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>
        Description {type === "film" ? "du film" : "de l'episode"}
      </p>
      <textarea
        className={`${style.InputTitreSerie}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default InputDescriptionEpisode;
