import style from "./InfoGeneral.tsx.module.css";
import InputCheck from "./inputCheck/InputCheck";
import InputDateSerie from "./inputDateSerie/InputDateSerie";
import InputImageHaurisontal from "./inputImageHaurisontal/InputImageHaurisontal";
import InputImageVertical from "./inputImageVertical/InputImageVertical";
import InputTitreSerie from "./inputTitreSerie/InputTitreSerie";
import ListeCategorie from "./listeCategorie/ListeCategorie";
import ListeProducteur from "./listeProducteur/ListeProducteur";

const InfoGeneral = () => {
  return (
    <div className={`${style.contenerSection}`}>
      <p className={`${style.titreSection}`}>Informations Générales</p>
      <InputTitreSerie />
      <InputDateSerie />
      <InputCheck />
      <div className={`${style.contenerListeCategorieProducteur}`}>
        <ListeCategorie />
        <ListeProducteur />
      </div>
      <div className={`${style.contenerInmputImage}`}>
        <InputImageVertical />
        <InputImageHaurisontal />
      </div>
    </div>
  );
};

export default InfoGeneral;
