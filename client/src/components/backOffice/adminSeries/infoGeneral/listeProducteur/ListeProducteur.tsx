import style from "./listeProducteur.module.css";

const ListeProducteur = () => {
  return (
    <div className={`${style.flexContainer}`}>
      <p className={`${style.pTitreInput}`}>Producteur</p>
      <div className={`${style.divContour}`}>
        <p className={`${style.pElement}`}>ACTION</p>
        <p className={`${style.pElement}`}>FANTASTIQUE</p>
        <p className={`${style.pElement}`}>DROLE</p>
        <p className={`${style.pElement}`}>fiction</p>
        <p className={`${style.pElement}`}>documentaire</p>
        <p className={`${style.pElement}`}>d'animation</p>
        <p className={`${style.pElement}`}>expérimentations</p>
      </div>
    </div>
  );
};

export default ListeProducteur;
