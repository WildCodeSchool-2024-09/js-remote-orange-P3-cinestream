import style from "./filmComposent.module.css";

const FilmComposent = ({ url, nom }: { url: string; nom: string }) => {
  return (
    <div className={`${style.contenerElement}`}>
      <img
        className={`${style.imgElement}`}
        src={`/public/temporaire/${url}`}
        alt="affiche filme"
      />
      <div className={`${style.shadow}`} />
      {/* <div className={`${style.filmeEnProdution}`} /> */}
      <p className={`${style.titreElement}`}>{nom}</p>
      <p className={`${style.info}`}>👑 | Film</p>
    </div>
  );
};

export default FilmComposent;
