import BntEnvoyer from "./bntEnvoyer/BntEnvoyer";
import style from "./commentaireUtilisateur.module.css";
import EtoileUtilisateur from "./etoileUtilisateur/EtoileUtilisateur";

const CommentaireUtilisateur = () => {
  return (
    <>
      <p>Laisse nton avis</p>
      <EtoileUtilisateur />
      <div className={`${style.leNomQueTuVeux}`}>
        <img src="" alt="" />
        <input type="text" />
        <BntEnvoyer />
      </div>
    </>
  );
};

export default CommentaireUtilisateur;
