import style from "./InputNom.module.css";

const InputNom = () => {
  return (
    <div className={`${style.contenerRename}`}>
      <p className={`${style.ptexteNom}`}>Pseudo</p>
      <input className={`${style.inputNom}`} type="text" placeholder="Pseudo" />
    </div>
  );
};

export default InputNom;
