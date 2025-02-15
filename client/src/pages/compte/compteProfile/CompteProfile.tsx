import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../../components/commun/footer/Footer";
import BntAvatar from "../../../components/compte/compteProfile/bntAvatar/BntAvatar";
import BntDeconection from "../../../components/compte/compteProfile/bntDeconection/BntDeconection";
import BntSauvgarde from "../../../components/compte/compteProfile/bntSauvgarde/BntSauvgarde";
import InputNom from "../../../components/compte/compteProfile/inputNom/InputNom";
import OffreAbonement from "../../../components/compte/compteProfile/offreAbonement/OffreAbonement";
import { UseTokenContext } from "../../../context/tokenContext";
import style from "./compteProfile.module.css";

const CompteProfile = () => {
  const [spedo, setSpedo] = useState<string>("");
  const [abonement, setAbonement] = useState<boolean>(false);
  const [dateAbonement, setDateAbonement] = useState<string>("");

  const [photoProfile, setPhotoProfile] = useState<File | null>(null);
  const [photoProfilePreview, setPhotoProfilePreview] = useState<string | null>(
    "",
  );
  //pour gain de performance regarder si la photo de profile a ete modifié pour pas faire de requete inutile
  const [isPpModif, setIsPpModif] = useState<boolean>(false);

  const { token } = UseTokenContext();

  //function pour mettre a jour les info du compte
  const updateCompte = async () => {
    const values = {
      token: token,
      pseudo: spedo,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/compte/profile/update`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      //renvoie true ou false si ca a marche ou non
      if (data.success) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(
        "eurror l'ore de la récupération des info de l'utilisateur",
        error,
      );
      return false;
    }
  };

  //function pour mettre a jour la photo de profile
  const updateCPhotoProfil = async () => {
    //préparé les images
    const formData = new FormData();
    formData.append("newPhotoProfil", photoProfile as Blob);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/compte/profile/updatePhotoProfile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
        },
      );
      //renvoie true ou false si ca a marche ou non
      if (data.success) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(
        "eurror l'ore de la récupération des info de l'utilisateur",
        error,
      );
      return false;
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies : ca met le bazard
  useEffect(() => {
    const getInfoCompte = async () => {
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
          setSpedo(data.compte.pseudo);
          // SetPhotoProfile(data.compte.photo_profil);
          setAbonement(!!data.compte.abonement);
          setDateAbonement(data.compte.abonementExpire);
          setPhotoProfilePreview(
            data.compte.photoProfile
              ? `${import.meta.env.VITE_API_URL}/uploads/${data.compte.photoProfile}`
              : null,
          );
        }
      } catch (error) {
        console.error(
          "eurror l'ore de la récupération des info de l'utilisateur",
          error,
        );
      }
    };

    getInfoCompte();
  }, []);

  return (
    <div>
      <div className={`${style.contenerHeder}`}>
        <p className={`${style.pTitrePage}`}>Votre profil</p>
        <div className={`${style.flexBnt}`}>
          <BntSauvgarde
            updateCompte={updateCompte}
            updateCPhotoProfil={updateCPhotoProfil}
            isPpModif={isPpModif}
          />
          <BntDeconection />
        </div>
      </div>
      <div className={`${style.contenerBody}`}>
        <BntAvatar
          setPhotoProfile={setPhotoProfile}
          photoProfilePreview={photoProfilePreview}
          setPhotoProfilePreview={setPhotoProfilePreview}
          setIsPpModif={setIsPpModif}
        />
        <InputNom spedo={spedo} setSpedo={setSpedo} />
        <OffreAbonement
          abonement={abonement}
          setAbonement={setAbonement}
          dateAbonement={dateAbonement}
          setDateAbonement={setDateAbonement}
        />
        <Footer />
      </div>
    </div>
  );
};

export default CompteProfile;
