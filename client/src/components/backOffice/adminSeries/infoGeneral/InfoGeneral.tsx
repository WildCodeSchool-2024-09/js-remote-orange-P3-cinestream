import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import BntFermerCommun from "../../communBackOffice/bntFermerCommun/BntFermerCommun";
import FooterAction from "../footerAction/FooterAction";
import style from "./infoGeneral.tsx.module.css";
import InputCheck from "./inputCheck/InputCheck";
import InputDateSerie from "./inputDateSerie/InputDateSerie";
import InputImageHaurisontal from "./inputImageHaurisontal/InputImageHaurisontal";
import InputImageVertical from "./inputImageVertical/InputImageVertical";
import InputTitreSerie from "./inputTitreSerie/InputTitreSerie";
import ListeCategorie from "./listeCategorie/ListeCategorie";
import ListeProducteur from "./listeProducteur/ListeProducteur";

interface InfoGeneralProps {
  titre: string;
  setTitre: (titre: string) => void;
  date: string;
  setDate: (date: string) => void;
  publier: boolean;
  setPublier: (publier: boolean) => void;
  premuim: boolean;
  setPremuim: (premuim: boolean) => void;
  setAfficheVertical: (afficheVertical: File | null) => void;
  setAfficheHaurisontal: (afficheHaurisontal: File | null) => void;
  categorie: { id: number; nom: string; image: string }[];
  setCategorie: (
    categorie: { id: number; nom: string; image: string }[],
  ) => void;
  platforme: { id: number; nom: string; image: string }[];
  setPlatforme: (
    platforme: { id: number; nom: string; image: string }[],
  ) => void;
  updateInfoGeneral: () => Promise<boolean>;
  type: string;
  setType: (type: string) => void;
}

const InfoGeneral = ({
  titre,
  setTitre,
  date,
  setDate,
  publier,
  setPublier,
  premuim,
  setPremuim,
  setAfficheVertical,
  setAfficheHaurisontal,
  categorie,
  setCategorie,
  platforme,
  setPlatforme,
  updateInfoGeneral,
  type,
  setType,
}: InfoGeneralProps) => {
  const [afficheHaurisontalPreview, setAfficheHaurisontalPreview] = useState<
    string | null
  >(null);
  const [afficheVerticalPreview, setAfficheVerticalPreview] = useState<
    string | null
  >(null);

  const { token } = UseTokenContext();
  const { id } = useParams();
  const navigate = useNavigate();

  //géré la date
  function genererDate(date: string) {
    if (date) {
      const date2 = new Date(date);
      // Ajouter un jour (ajustement du fuseau horaire)
      date2.setDate(date2.getDate() + 1);
      // Formater la date au format "YYYY-MM-DD"
      return date2.toISOString().split("T")[0];
    }
    return ""; // Si la date est absente, on retourne une chaîne vide
  }

  //function qui récupère toutes les informations de la série
  const getInfoGeneral = async () => {
    const values = {
      token: token,
      id: id,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/article/infoGeneral/recuperer`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        //met tous les info a jour
        setTitre(data.serie.nom);
        setDate(data.serie.date ? genererDate(data.serie.date) : "");
        setPublier(!!data.serie.publier);
        setPremuim(!!data.serie.premium);
        setAfficheVerticalPreview(
          data.serie.image
            ? `${import.meta.env.VITE_API_URL}/uploads/${data.serie.image}`
            : null,
        );
        setAfficheHaurisontalPreview(
          data.serie.image_rectangle
            ? `${import.meta.env.VITE_API_URL}/uploads/${data.serie.image_rectangle}`
            : null,
        );
        setCategorie(data.categorieSelect);
        setPlatforme(data.platformeSelect);
        setType(data.serie.type);
      }
    } catch (error) {
      //si eurreur 404
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        navigate("/404");
      }
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getInfoGeneral();
  }, []);

  const sauvgarde = async () => {
    const saugarder = await updateInfoGeneral();
    if (saugarder) {
      navigate("/admin/recherche");
      return;
    }
    if (
      window.confirm(
        "une erreur est survenue l'ore de auto sauvgarde, voulez vous quitter sans sauvgarder ?",
      )
    ) {
      navigate("/admin/recherche");
      return;
    }
  };

  return (
    <>
      <div className={`${style.flexTitreFermer}`}>
        <p className={`${style.pTitrePage}`}>
          Modifier {type === "film" ? "le Film" : "la Série"}
        </p>
        <BntFermerCommun action={sauvgarde} />
      </div>
      <div className={`${style.contenerSection}`}>
        <p className={`${style.titreSection}`}>Informations Générales</p>
        <InputTitreSerie titre={titre} setTitre={setTitre} type={type} />
        <InputDateSerie date={date} setDate={setDate} />
        <InputCheck
          publier={publier}
          setPublier={setPublier}
          premuim={premuim}
          setPremuim={setPremuim}
        />
        <div className={`${style.contenerListeCategorieProducteur}`}>
          <ListeCategorie categorie={categorie} setCategorie={setCategorie} />
          <ListeProducteur platforme={platforme} setPlatforme={setPlatforme} />
        </div>
        <div className={`${style.contenerInmputImage}`}>
          <InputImageVertical
            setImage={setAfficheVertical}
            imagePreview={afficheVerticalPreview}
            setImagePreview={setAfficheVerticalPreview}
          />
          <InputImageHaurisontal
            setImage={setAfficheHaurisontal}
            imagePreview={afficheHaurisontalPreview}
            setImagePreview={setAfficheHaurisontalPreview}
          />
        </div>
        <FooterAction updateInfoGeneral={updateInfoGeneral} />
      </div>
    </>
  );
};

export default InfoGeneral;
