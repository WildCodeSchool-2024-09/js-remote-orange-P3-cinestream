import style from "./inputCheck.module.css";

const InputCheck = () => {
  return (
    <div className={`${style.contenerAllInputCheck}`}>
      <div className={`${style.contenerInput}`}>
        <input
          className={`${style.InputCheck}`}
          type="checkbox"
          id="published"
        />
        <label className={`${style.pTitreInputCheck}`} htmlFor="published">
          Publié
        </label>
      </div>
      <div className={`${style.contenerInput}`}>
        <input className={`${style.InputCheck}`} type="checkbox" id="premium" />
        <label className={`${style.pTitreInputCheck}`} htmlFor="premium">
          Premium
        </label>
      </div>
    </div>
  );
};

export default InputCheck;
