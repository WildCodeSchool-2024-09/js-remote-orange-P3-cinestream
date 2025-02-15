import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import style from "./bntCompte.module.css";

const BntCompte = () => {
  const { token } = UseTokenContext();
  const [photo_profile, setPhotoProfile] = useState<string | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies : ca met le bazard
  useEffect(() => {
    const getPhotoProfile = async () => {
      const values = {
        token: token,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/compte/profile/get`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.success) {
          setPhotoProfile(
            data.compte.photoProfile
              ? `${import.meta.env.VITE_API_URL}/uploads/${data.compte.photoProfile}`
              : null,
          );
        }
      } catch (error) {
        console.error(
          "eurror l'ore de la récupération de la photo de profil",
          error,
        );
      }
    };

    if (token) {
      getPhotoProfile();
    }
  }, []);
  return (
    <>
      <Link to={"/compte"}>
        <div className={`${style.conetnerImage}`}>
          <img
            className={`${style.imageAvatar}`}
            src={photo_profile ? photo_profile : "/images/icon/iconCompte.png"}
            alt="avtar de prifile"
          />
        </div>
      </Link>
    </>
  );
};

export default BntCompte;
