import style from "./InputMail.module.css";

interface InputMailProps {
  email: string;
  setEmail: (email: string) => void;
}

const InputMail: React.FC<InputMailProps> = ({ email, setEmail }) => {
  return (
    <div className={`${style.contenerInputMail}`}>
      <p>Adresse mail</p>
      <input
        type="email"
        placeholder="Adresse mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </div>
  );
};

export default InputMail;
