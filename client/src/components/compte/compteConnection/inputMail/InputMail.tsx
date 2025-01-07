import style from "./InputMail.module.css";

const InputMail = () => {
  return (
    <div className={`${style.contenerInputMail}`}>
      <p>Adresse mail</p>
      <input type="text" placeholder="Adresse mail" />
    </div>
  );
};

export default InputMail;
