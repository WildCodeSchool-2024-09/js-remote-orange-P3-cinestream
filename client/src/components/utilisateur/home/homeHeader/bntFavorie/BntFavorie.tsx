import style from "./bntFavorie.module.css";

const BntFavorie = () => {
  return (
    <div>
      <button className={`${style.bntFavorie}`} type="button">
        🤍 Ajouter aux favoris
      </button>
    </div>
  );
};

export default BntFavorie;
