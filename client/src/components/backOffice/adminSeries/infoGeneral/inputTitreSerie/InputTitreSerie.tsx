import style from "./inputTitreSerie.module.css";

interface InputTitreSerieProps {
  titre: string;
  setTitre: (titre: string) => void;
}

const InputTitreSerie = ({ titre, setTitre }: InputTitreSerieProps) => {
  return (
    <div className={`${style.contenerInputNomSerie}`}>
      <p className={`${style.PTitreSerie}`}>Titre de la série</p>
      <input
        className={`${style.InputTitreSerie}`}
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
    </div>
  );
};

export default InputTitreSerie;
