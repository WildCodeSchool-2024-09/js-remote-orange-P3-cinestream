import { useEffect } from "react";
import style from "./inputMail.module.css";

interface ValideProps {
  email: boolean;
  motDePasse: boolean;
}

interface InputMailProps {
  email: string;
  setEmail: (email: string) => void;
  valide: ValideProps;
  setValide: (valide: ValideProps) => void;
}

const InputMail: React.FC<InputMailProps> = ({
  email,
  setEmail,
  valide,
  setValide,
}) => {
  // verifi que le nom est valide
  function verifNomValide() {
    const regexEmail =
      /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,253}\.[a-zA-Z]{2,6}$/;
    if (regexEmail.test(email)) {
      setValide({ ...valide, email: true });
    } else {
      setValide({ ...valide, email: false });
    }
  }

  // défnir la classe
  function defClass() {
    if (valide.email) {
      return `${style.focusVert}`;
    }
    return `${style.focusRouge}`;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies : ca met le bazard
  useEffect(() => {
    verifNomValide();
  }, [email]);

  return (
    <div className={`${style.contenerInputMail}`}>
      <p>Adresse mail</p>
      <input
        className={`${defClass()}`}
        type="email"
        placeholder="Adresse mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </div>
  );
};

export default InputMail;
