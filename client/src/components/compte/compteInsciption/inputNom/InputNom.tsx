import style from "./InputNom.module.css";

const InputNom = () => {
  return (
    <div className={`${style.contenerInputNom}`}>
      <p>Nom utilisateur</p>
      <input type="text" placeholder="Nom utilisateur" />
    </div>
  );
};

export default InputNom;
