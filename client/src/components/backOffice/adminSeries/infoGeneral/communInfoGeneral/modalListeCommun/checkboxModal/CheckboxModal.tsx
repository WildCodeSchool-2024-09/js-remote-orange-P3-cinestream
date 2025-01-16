import style from "./checkboxModal.module.css";

interface CheckboxModalProps {
  index: number;
  element: string;
}

const CheckboxModal = ({ index, element }: CheckboxModalProps) => {
  return (
    <div className={`${style.contenerInput}`}>
      <input
        className={`${style.InputCheck}`}
        type="checkbox"
        id={`commun${index}`}
      />
      <label className={`${style.pTitreInputCheck}`} htmlFor={`commun${index}`}>
        {element}
      </label>
    </div>
  );
};

export default CheckboxModal;
