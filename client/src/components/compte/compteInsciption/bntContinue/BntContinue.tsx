import axios from "axios";
import style from "./BntContinue.module.css";

interface BntContinueProps {
  valide: {
    nom: boolean;
    email: boolean;
    motDePasse: boolean;
    motDePasse2: boolean;
  };
  messageErreur: string;
  setMessageErreur: (value: React.SetStateAction<string>) => void;
  nom: string;
  email: string;
  motDePasse: string;
}
const BntContinue: React.FC<BntContinueProps> = ({
  valide,
  messageErreur,
  setMessageErreur,
  nom,
  email,
  motDePasse,
}) => {
  //change la classe en fonction de si tout est bon
  function defClass() {
    if (valide.nom && valide.email && valide.motDePasse && valide.motDePasse2) {
      return `${style.bntContinue} ${style.bntContinueValide}`;
    }
    return `${style.bntContinue}`;
  }

  const handleInscription = async () => {
    const values = {
      nom: nom,
      email: email,
      motDePasse: motDePasse,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3310/api/inscription",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setMessageErreur(data.message);
    } catch (error) {
      setMessageErreur("Erreur lors de l'inscription");
    }
  };

  return (
    <>
      {messageErreur && (
        <p className={`${style.messageErreur}`}>{messageErreur}</p>
      )}
      <button
        className={defClass()}
        type="button"
        onClick={() => {
          handleInscription();
        }}
      >
        continue
      </button>
    </>
  );
};

export default BntContinue;
