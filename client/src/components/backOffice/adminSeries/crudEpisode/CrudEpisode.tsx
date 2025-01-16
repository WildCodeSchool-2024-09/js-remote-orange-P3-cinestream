import style from "./CrudEpisode.module.css";
import InputSaison from "./InputSaison/InputSaison";
import BntAjouterEpisode from "./bntAjouterEpisode/BntAjouterEpisode";
import ElementCurd from "./elementCurd/ElementCurd";

const CrudEpisode = () => {
  return (
    <div className={`${style.contenerSection}`}>
      <p className={`${style.titreSection}`}>Épisodes</p>
      <div className={`${style.flexAllElement}`}>
        <InputSaison />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <BntAjouterEpisode />
      </div>
    </div>
  );
};

export default CrudEpisode;
