import style from "./inputDateSerie.module.css";

interface InputDateSerieProps {
  date: string;
  setDate: (value: string) => void;
}

const InputDateSerie = ({ date, setDate }: InputDateSerieProps) => {
  return (
    <div className={`${style.contenerDate}`}>
      <p className={`${style.pTitreDate}`}>Date de sortie</p>
      <input
        className={`${style.inputDate}`}
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
};

export default InputDateSerie;
