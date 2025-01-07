import style from "./InputConfirmationMotDePasse.module.css";

const InputConfirmationMotDePasse = () => {
  return (
    <div className={`${style.contenerInputMDPConfirmation}`}>
      <p>Confirmer mot de passe</p>
      <div className={`${style.contenerRelatif}`}>
        <input type="text" placeholder="Confirmer mot de passe" />
        <button type="button" />
      </div>
    </div>
  );
};

export default InputConfirmationMotDePasse;
