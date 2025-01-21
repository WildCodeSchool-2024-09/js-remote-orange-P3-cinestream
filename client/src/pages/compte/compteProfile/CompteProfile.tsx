import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../../components/commun/footer/Footer";
import BntAvatar from "../../../components/compte/compteProfile/bntAvatar/BntAvatar";
import BntDeconection from "../../../components/compte/compteProfile/bntDeconection/BntDeconection";
import BntSauvgarde from "../../../components/compte/compteProfile/bntSauvgarde/BntSauvgarde";
import InputNom from "../../../components/compte/compteProfile/inputNom/InputNom";
import OffreAbonement from "../../../components/compte/compteProfile/offreAbonement/OffreAbonement";
import { UseTokenContext } from "../../../context/tokenContext";
import style from "./CompteProfile.module.css";

const CompteProfile = () => {
  const [spedo, setSpedo] = useState<string>("");
  // const [photoProfile, SetPhotoProfile] = useState<string>("");
  const [abonement, setAbonement] = useState<boolean>(false);
  const [dateAbonement, setDateAbonement] = useState<string>("");

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
          <BntSauvgarde updateCompte={updateCompte} />
          <BntDeconection />
        </div>
      </div>
      <div className={`${style.contenerBody}`}>
        <BntAvatar />
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
