import style from "./bntRecherche.module.css";

const BntRecherche = () => {
  return (
    <>
      <button className={`${style.searchButton}`} type="button">
        🔍
      </button>
    </>
  );
};

export default BntRecherche;
