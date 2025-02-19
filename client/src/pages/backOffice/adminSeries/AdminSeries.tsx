import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CrudEpisode from "../../../components/backOffice/adminSeries/crudEpisode/CrudEpisode";
import CrudUnivers from "../../../components/backOffice/adminSeries/crudUnisers/CrudUnivers";
import InfoGeneral from "../../../components/backOffice/adminSeries/infoGeneral/InfoGeneral";
import { UseTokenContext } from "../../../context/tokenContext";
import style from "./adminSeries.module.css";

const AdminSeries = () => {
  const [titre, setTitre] = useState("");
  const [date, setDate] = useState("");
  const [publier, setPublier] = useState(false);
  const [premuim, setPremuim] = useState(false);
  const [afficheVertical, setAfficheVertical] = useState<File | null>(null);
  const [afficheHaurisontal, setAfficheHaurisontal] = useState<File | null>(
    null,
  );
  const [categorie, setCategorie] = useState<
    { id: number; nom: string; image: string }[]
  >([]);
  const [platforme, setPlatforme] = useState<
    { id: number; nom: string; image: string }[]
  >([]);
  const [type, setType] = useState("serie");

  const { token } = UseTokenContext();
  const { id } = useParams();
  const location = useLocation();

  //function met a jour tout les informations général de la série dans la bd
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
    }

    if (sucssces1 && sucssces2) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    //use effect de navigation
    const hash = location.hash;
    //si il a un # dans url
    if (hash) {
      //récupère l'élément
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        //scroll jusqu'à l'élément
        targetElement.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [location]);

  return (
    <>
      <div className={`${style.bodyPage}`}>
        {/* bnt fermer la page déplacer dans info général */}
        <InfoGeneral
          titre={titre}
          setTitre={setTitre}
          date={date}
          setDate={setDate}
          publier={publier}
          setPublier={setPublier}
          premuim={premuim}
          setPremuim={setPremuim}
          setAfficheVertical={setAfficheVertical}
          setAfficheHaurisontal={setAfficheHaurisontal}
          categorie={categorie}
          setCategorie={setCategorie}
          platforme={platforme}
          setPlatforme={setPlatforme}
          updateInfoGeneral={updateInfoGeneral}
          type={type}
          setType={setType}
        />
        <CrudEpisode updateInfoGeneral={updateInfoGeneral} type={type} />
        <CrudUnivers updateInfoGeneral={updateInfoGeneral} />
      </div>
    </>
  );
};

export default AdminSeries;
