import style from "./inputImageHaurisontal.module.css";

interface InputImageHaurisontalProps {
  setImage: (image: File | null) => void;
  imagePreview: string | null;
  setImagePreview: (imagePreview: string | null) => void;
  type: string;
}

const InputImageHaurisontal = ({
  setImage,
  imagePreview,
  setImagePreview,
  type,
}: InputImageHaurisontalProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={`${style.contenerTitreAndImage}`}>
      <p className={`${style.pTitreInputImage}`}>
        {" "}
        Miniature {type === "film" ? "du film" : "de l'episode"}{" "}
      </p>
      <div
        className={`${style.contenerInput}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          id="imageSerieHaurisontal"
          type="file"
          className={`${style.inputImage}`}
          accept="image/*"
          onChange={handleFileChange}
        />
        <label
          htmlFor="imageSerieHaurisontal"
          className={`${style.labelInputImage}`}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="affiche verticale"
              className={`${style.imagePreview}`}
            />
          ) : (
            <span className={`${style.textLabelImage}`}>Ajouter une image</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default InputImageHaurisontal;
