import style from "./InputNom.module.css";

interface InputNomProps {
  nom: string;
  setNom: (nom: string) => void;
}

const InputNom: React.FC<InputNomProps> = ({ nom, setNom }) => {
  return (
    <div className={`${style.contenerInputNom}`}>
      <p>Nom utilisateur</p>
      <input
        type="text"
        placeholder="Nom utilisateur"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
    </div>
  );
};

export default InputNom;
