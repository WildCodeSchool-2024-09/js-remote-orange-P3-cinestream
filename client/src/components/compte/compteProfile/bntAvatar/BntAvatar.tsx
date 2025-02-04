import { MdAddPhotoAlternate } from "react-icons/md";
import style from "./bntAvatar.module.css";

interface BntAvatarProps {
  setPhotoProfile: (image: File | null) => void;
  photoProfilePreview: string | null;
  setPhotoProfilePreview: (value: string) => void;
  setIsPpModif: (value: boolean) => void;
}

const BntAvatar = ({
  setPhotoProfile,
  photoProfilePreview,
  setPhotoProfilePreview,
  setIsPpModif,
}: BntAvatarProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoProfile(file);
      setPhotoProfilePreview(URL.createObjectURL(file));
      setIsPpModif(true);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setPhotoProfile(file);
      setPhotoProfilePreview(URL.createObjectURL(file));
      setIsPpModif(true);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={`${style.contenerAvatar}`}>
      <p className={`${style.pCharger}`}>Changer d'avatar</p>
      <div
        className={`${style.contenerImage}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          className={`${style.inputAvatar}`}
          id="imageAvatar"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="imageAvatar">
          <img
            className={`${style.imgAvatar}`}
            src={
              photoProfilePreview
                ? photoProfilePreview
                : "/images/icon/iconCompte.png"
            }
            alt="avatar"
          />
        </label>
        <p className={`${style.logoPhoto}`}>
          <MdAddPhotoAlternate />
        </p>
      </div>
    </div>
  );
};

export default BntAvatar;
