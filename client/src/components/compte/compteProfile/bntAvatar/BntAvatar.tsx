import { MdAddPhotoAlternate } from "react-icons/md";
import style from "./bntAvatar.module.css";

const BntAvatar = () => {
  return (
    <div className={`${style.contenerAvatar}`}>
      <p className={`${style.pCharger}`}>Changer d'avatar</p>
      <div className={`${style.contenerImage}`}>
        <img
          className={`${style.imgAvatar}`}
          src="/temporaire/profil/iconCompte.png"
          alt="avatar"
        />
        <p className={`${style.logoPhoto}`}>
          <MdAddPhotoAlternate />
        </p>
      </div>
    </div>
  );
};

export default BntAvatar;
