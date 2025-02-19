import style from "./inputTitreSerie.module.css";

interface InputTitreSerieProps {
  titre: string;
  setTitre: (titre: string) => void;
  type: string;
}

const InputTitreSerie = ({ titre, setTitre, type }: InputTitreSerieProps) => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>
        Titre {type === "film" ? "du film" : "de la série"}
      </p>
      <input
        className={`${style.InputTitreSerie}`}
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        maxLength={250}
      />
    </div>
  );
};

export default InputTitreSerie;
