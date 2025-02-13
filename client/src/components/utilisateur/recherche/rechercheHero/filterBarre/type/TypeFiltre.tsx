import styles from "./type.module.css";

interface TypeProps {
  type: string;
  setType: (type: string) => void;
}

const Type = ({ type, setType }: TypeProps) => {
  return (
    <div className={`${styles.contenerType}`}>
      <select
        className={`${styles.typeInput}`}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="all">Tous</option>
        <option value="film">Film</option>
        <option value="serie">Série</option>
      </select>
    </div>
  );
};

export default Type;
