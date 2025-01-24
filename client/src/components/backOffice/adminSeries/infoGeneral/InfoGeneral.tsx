import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import BntFermerCommun from "../../communBackOffice/bntFermerCommun/BntFermerCommun";
import FooterAction from "../footerAction/FooterAction";
import style from "./InfoGeneral.tsx.module.css";
import InputCheck from "./inputCheck/InputCheck";
import InputDateSerie from "./inputDateSerie/InputDateSerie";
import InputImageHaurisontal from "./inputImageHaurisontal/InputImageHaurisontal";
import InputImageVertical from "./inputImageVertical/InputImageVertical";
import InputTitreSerie from "./inputTitreSerie/InputTitreSerie";
import ListeCategorie from "./listeCategorie/ListeCategorie";
import ListeProducteur from "./listeProducteur/ListeProducteur";

const InfoGeneral = () => {
  const [titre, setTitre] = useState("");
  const [date, setDate] = useState("");
  const [publier, setPublier] = useState(false);
  const [premuim, setPremuim] = useState(false);
  const [afficheVertical, setAfficheVertical] = useState<File | null>(null);
  const [afficheVerticalPreview, setAfficheVerticalPreview] = useState<
    string | null
  >(null);
  const [afficheHaurisontal, setAfficheHaurisontal] = useState<File | null>(
    null,
  );
  const [afficheHaurisontalPreview, setAfficheHaurisontalPreview] = useState<
    string | null
  >(null);
  const [categorie, setCategorie] = useState<
    { id: number; nom: string; image: string }[]
  >([]);
  const [platforme, setPlatforme] = useState<
    { id: number; nom: string; image: string }[]
  >([]);

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

  //function met a jour tout les informations de la série dans la bd
  const updateInfoGeneral = async () => {
    const values = {
      token: token,
      id: id,
      nom: titre,
      date: date,
      publier: publier,
      premium: premuim,
      categorie: categorie,
      platforme: platforme,
    };

    let sucssces1 = false;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/article/infoGeneral/actualiser`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      sucssces1 = data.sucssces;
    } catch (error) {
      console.error("Erreur lors de uplade des informations de la serie");
      console.error(error);
    }

    //préparé les images
    const formData = new FormData();
    formData.append("afficheVertical", afficheVertical as Blob);
    formData.append("afficheHaurisontal", afficheHaurisontal as Blob);

    let sucssces2 = false;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/article/infoGeneral/actualiserImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
            id: id,
          },
        },
      );

      sucssces2 = data.sucssces;
    } catch (error) {
      console.error("Erreur lors de uplade des image");
      console.error(error);
    }

    if (sucssces1 && sucssces2) {
      return true;
    }
    return false;
  };

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
        <p className={`${style.pTitrePage}`}>Modifier la Série</p>
        <BntFermerCommun action={sauvgarde} />
      </div>
      <div className={`${style.contenerSection}`}>
        <p className={`${style.titreSection}`}>Informations Générales</p>
        <InputTitreSerie titre={titre} setTitre={setTitre} />
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
