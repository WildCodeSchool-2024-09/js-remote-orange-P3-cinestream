import style from "./CrudEpisode.module.css";
import BntAjouterSerie from "./bntAjouterSerie/BntAjouterSerie";
import ElementCurd from "./elementCurd/ElementCurd";

const CrudUnivers = () => {
  return (
    <div className={`${style.contenerSection}`}>
      <p className={`${style.titreSection}`}>Univers</p>
      <div className={`${style.flexAllElement}`}>
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <ElementCurd />
        <BntAjouterSerie />
      </div>
    </div>
  );
};

export default CrudUnivers;
