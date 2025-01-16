import style from "./inputImageVertical.module.css";

const InputImageVertical = () => {
  return (
    <div className={`${style.contenerTitreAndImage}`}>
      <p className={`${style.pTitreInputImage}`}> Affiche Verticale </p>
      <div>
        <input
          id="imageSerieVertical"
          type="file"
          className={`${style.inputImage}`}
        />
        <label
          htmlFor="imageSerieVertical"
          className={`${style.labelInputImage}`}
        >
          <span className={`${style.textLabelImage}`}>Ajouter une image</span>
        </label>
      </div>
    </div>
  );
};

export default InputImageVertical;
