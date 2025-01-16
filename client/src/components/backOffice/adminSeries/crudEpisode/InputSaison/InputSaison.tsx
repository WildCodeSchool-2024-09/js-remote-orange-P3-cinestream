import style from "./InputSaison.module.css";

const InputSaison = () => {
  return (
    <select className={`${style.InputSaison}`}>
      <option value="1">Saison 1</option>
      <option value="2">Saison 2</option>
      <option value="3">Saison 3</option>
      <option value="4">Saison 4</option>
      <option value="-1">Ajouter</option>
    </select>
  );
};

export default InputSaison;
