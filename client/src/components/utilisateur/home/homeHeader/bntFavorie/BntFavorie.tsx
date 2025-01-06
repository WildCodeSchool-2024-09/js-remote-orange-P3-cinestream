import style from "./bntFavorie.module.css";

const BntFavorie = () => {
  return (
    <div>
      <button className={`${style.bntFavorie}`} type="button">
        🤍 Ajouter au favorie
      </button>
    </div>
  );
};

export default BntFavorie;
