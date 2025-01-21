import style from "./inputCheck.module.css";

interface InputCheckProps {
  publier: boolean;
  setPublier: (value: boolean) => void;
  premuim: boolean;
  setPremuim: (value: boolean) => void;
}

const InputCheck = ({
  publier,
  setPublier,
  premuim,
  setPremuim,
}: InputCheckProps) => {
  return (
    <div className={`${style.contenerAllInputCheck}`}>
      <div className={`${style.contenerInput}`}>
        <input
          className={`${style.InputCheck}`}
          type="checkbox"
          id="published"
          checked={publier}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setPublier(isChecked);
          }}
        />
        <label className={`${style.pTitreInputCheck}`} htmlFor="published">
          Publié
        </label>
      </div>
      <div className={`${style.contenerInput}`}>
        <input
          className={`${style.InputCheck}`}
          type="checkbox"
          id="inputPremium"
          checked={premuim}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setPremuim(isChecked);
          }}
        />
        <label className={`${style.pTitreInputCheck}`} htmlFor="inputPremium">
          Premium
        </label>
      </div>
    </div>
  );
};

export default InputCheck;
