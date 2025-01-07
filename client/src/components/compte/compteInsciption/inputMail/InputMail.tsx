import style from "./InputMail.module.css";

interface InputEmailProps {
  email: string;
  setEmail: (value: React.SetStateAction<string>) => void;
}

const InputMail: React.FC<InputEmailProps> = ({ email, setEmail }) => {
  return (
    <div className={`${style.contenerInputMail}`}>
      <p>Adresse mail</p>
      <input
        type="email"
        placeholder="Adresse mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default InputMail;
