import style from "./InputMotDePasse.module.css";

const InputMotDePasse = () => {
  return (
    <div className={`${style.contenerInputMDP}`}>
      <p>Mot de passe</p>
      <div className={`${style.contenerRelatif}`}>
        <input type="text" placeholder="Mot de passe" />
        <button type="button" />
      </div>
    </div>
  );
};

export default InputMotDePasse;
