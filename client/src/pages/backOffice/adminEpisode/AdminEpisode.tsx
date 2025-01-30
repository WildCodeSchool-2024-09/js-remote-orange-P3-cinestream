import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FooterAction from "../../../components/backOffice/adminEpisode/footerAction/FooterAction";
import InputDescriptionEpisode from "../../../components/backOffice/adminEpisode/inputDescriptionEpisode/InputDescriptionEpisode";
import InputImageHaurisontal from "../../../components/backOffice/adminEpisode/inputImageHaurisontal/InputImageHaurisontal";
import InputLienVideo from "../../../components/backOffice/adminEpisode/inputLienVideo/InputLienVideo";
import InputTitreEpisode from "../../../components/backOffice/adminEpisode/inputTitreEpisode/InputTitreEpisode";
import BntFermerCommun from "../../../components/backOffice/communBackOffice/bntFermerCommun/BntFermerCommun";
import { UseTokenContext } from "../../../context/tokenContext";
import style from "./adminEpisode.module.css";

const AdminEpisode = () => {
  const navigate = useNavigate();
  const { idA, idE, numS } = useParams();
  const { token } = UseTokenContext();

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [video, setVideo] = useState<string>("");
  const [numeroEpisode, setNumeroEpisode] = useState<number>(0);
  const [type, setType] = useState("serie");

  //function met a jour tout les informations de l'episde
  const updateEpisode = async () => {
    const values = {
      token: token,
      idE: idE,
      nom: titre,
      description: description,
      lien_video: video,
    };

    let sucssces1 = false;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/description/actualiser`,
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
    formData.append("image", image as Blob);

    let sucssces2 = false;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/description/actualiserImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
            idE: idE,
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    //récupère les info de l'épisode
    const getInfoEpisode = async () => {
      const values = {
        token: token,
        idE: idE,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/backoffice/episode/getById`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.sucssces) {
          //met tous les info a jour
          setTitre(data.episode.nom);
          setDescription(
            data.episode.description ? data.episode.description : "",
          );
          setVideo(data.episode.lien_video);

          setImagePreview(
            data.episode.image
              ? `${import.meta.env.VITE_API_URL}/uploads/${data.episode.image}`
              : null,
          );
          setNumeroEpisode(data.episode.numero);
          setType(data.article.type);
        }
      } catch (error) {
        //si eurreur 404
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          navigate("/404");
        }
      }
    };
    getInfoEpisode();
  }, []);

  //function de collback pour fermer la page et auto sauvagarder
  const handleFermer = async () => {
    const saugarder = await updateEpisode();
    if (saugarder) {
      navigate(`/admin/organisation/${idA}/${numS}#crudEpisode`);
      window.scrollTo(0, 0);
      return;
    }
    //si ca a pas sauvgarder demander si il veut quitter sans sauvgarder
    const messageEuereur =
      "une erreur est survenue pendant l'auto sauvgarde, voulez vous quitter sans sauvgarder ?";
    if (window.confirm(messageEuereur)) {
      navigate(`/admin/organisation/${idA}/${numS}#crudEpisode`);
      window.scrollTo(0, 0);
      return;
    }
  };

  return (
    <>
      <div className={`${style.bodyPage}`}>
        <div className={`${style.flexTitreFermer}`}>
          <p className={`${style.pTitrePage}`}>
            Modifier{" "}
            {type === "film" ? "le Film" : `l'Épisode ${numeroEpisode}`}
          </p>
          <BntFermerCommun
            action={() => {
              handleFermer();
            }}
          />
        </div>

        <div className={`${style.contenerSection}`}>
          <InputImageHaurisontal
            setImage={setImage}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            type={type}
          />
          <InputTitreEpisode titre={titre} setTitre={setTitre} type={type} />
          <InputDescriptionEpisode
            description={description}
            setDescription={setDescription}
            type={type}
          />
          <InputLienVideo video={video} setVideo={setVideo} />
        </div>
        <FooterAction updateEpisode={updateEpisode} />
      </div>
    </>
  );
};

export default AdminEpisode;
