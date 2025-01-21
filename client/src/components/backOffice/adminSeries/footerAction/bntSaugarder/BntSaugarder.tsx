import style from "./BntSaugarder.module.css";

interface BntSaugarderProps {
  updateInfoGeneral: () => void;
}

const BntSaugarder = ({ updateInfoGeneral }: BntSaugarderProps) => {
  return (
    <div>
      <button
        className={`${style.bntSaugarder}`}
        type="button"
        onClick={() => updateInfoGeneral()}
      >
        Sauvegarder
      </button>
    </div>
  );
};

export default BntSaugarder;
