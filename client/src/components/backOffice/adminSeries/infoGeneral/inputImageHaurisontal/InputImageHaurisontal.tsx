import style from "./inputImageHaurisontal.module.css";

const InputImageHaurisontal = () => {
  return (
    <div className={`${style.contenerTitreAndImage}`}>
      <p className={`${style.pTitreInputImage}`}> Affiche Horizontale </p>
      <div>
        <input
          id="imageSerieHaurisontal"
          type="file"
          className={`${style.inputImage}`}
        />
        <label
          htmlFor="imageSerieHaurisontal"
          className={`${style.labelInputImage}`}
        >
          <span className={`${style.textLabelImage}`}>Ajouter une image</span>
        </label>
      </div>
    </div>
  );
};

export default InputImageHaurisontal;
