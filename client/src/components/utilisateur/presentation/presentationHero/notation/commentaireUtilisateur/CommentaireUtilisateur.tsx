import BntEnvoyer from "./bntEnvoyer/BntEnvoyer";
import EtoileUtilisateur from "./etoileUtilisateur/EtoileUtilisateur";
import style from "./commentaireUtilisateur.module.css";

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
