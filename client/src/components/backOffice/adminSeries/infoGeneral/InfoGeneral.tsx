import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
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
  // const [afficheVertical, setAfficheVertical] = useState("");
  // const [afficheHaurisontal, setAfficheHaurisontal] = useState("");
  const [categorie, setCategorie] = useState<
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
        "http://localhost:3310/api/backoffice/article/infoGeneral/recuperer",
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
        // setAfficheVertical(data.serie.image);
        // setAfficheHaurisontal(data.serie.image_rectangle);
        setCategorie(data.categorieSelect);
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
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3310/api/backoffice/article/infoGeneral/actualiser",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return data.sucssces;
    } catch (error) {
      console.error("Erreur lors de uuplade des informations de la serie");
      console.error(error);
    }
  };

  return (
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
        <ListeProducteur />
      </div>
      <div className={`${style.contenerInmputImage}`}>
        <InputImageVertical />
        <InputImageHaurisontal />
      </div>
      <FooterAction updateInfoGeneral={updateInfoGeneral} />
    </div>
  );
};

export default InfoGeneral;
