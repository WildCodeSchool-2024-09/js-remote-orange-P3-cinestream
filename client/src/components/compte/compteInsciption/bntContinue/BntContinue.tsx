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
}
const BntContinue: React.FC<BntContinueProps> = ({
  valide,
  messageErreur,
  setMessageErreur,
}) => {
  //change la classe en fonction de si tout est bon
  function defClass() {
    if (valide.nom && valide.email && valide.motDePasse && valide.motDePasse2) {
      return `${style.bntContinue} ${style.bntContinueValide}`;
    }
    return `${style.bntContinue}`;
  }

  return (
    <>
      <button
        className={defClass()}
        type="button"
        onClick={() => {
          setMessageErreur(messageErreur);
        }}
      >
        continue
      </button>
    </>
  );
};

export default BntContinue;
