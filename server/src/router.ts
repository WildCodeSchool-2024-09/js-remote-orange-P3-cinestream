import express from "express";
import articleActions from "./modules/article/articleActions";
import categorieActions from "./modules/categorie/categorieActions";
import autentification from "./modules/middlewares/autentification";
import verifSaisi from "./modules/middlewares/verifSaisi";
import originResquet from "./modules/originResquet/originResquet";
import serieActions from "./modules/serie/serieActions";
import utilisateurActions from "./modules/utilisateur/utilisateurActions";

const router = express.Router();

//route utilisateur
//inscription
router.post(
  "/api/inscription",
  verifSaisi.nomCorrect,
  verifSaisi.mailCorrect,
  verifSaisi.motDePasseCorrect,
  verifSaisi.motDePasse2Correct,
  verifSaisi.utilisateurIsExist,
  utilisateurActions.inscription,
);
//connexion
router.post(
  "/api/connection",
  verifSaisi.mailCorrect,
  verifSaisi.motDePasseCorrect,
  autentification.mail,
  autentification.motDePasse,
  utilisateurActions.connexion,
);

//verifie si uttilisateur est admin
router.post(
  "/api/isAdmin",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  utilisateurActions.returnAdmin,
);

//crée un compte admin (uniquement via le serveur)
router.post(
  "/api/newAdmin",
  originResquet.serveur,
  originResquet.checkTokenServeur,
  verifSaisi.nomCorrect,
  verifSaisi.utilisateurIsExist,
  verifSaisi.mailCorrect,
  verifSaisi.motDePasseCorrect,
  utilisateurActions.inscriptionAdmin,
);

//--------BACKOFFICE---------
//crée une serie
router.post(
  "/api/backoffice/serie/new",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  serieActions.cree,
);

//récupère tout les series
router.post(
  "/api/backoffice/serie/getAll",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  serieActions.getAll,
);

//routes pour info général d'une serie
router.post(
  "/api/backoffice/article/infoGeneral/recuperer",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  articleActions.getAll,
);

//route popur actualiser les info général d'une serie
router.post(
  "/api/backoffice/article/infoGeneral/actualiser",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  articleActions.update,
);

//routes pour récupérer tout les categories quie exite
router.get("/api/categorie/getAll", categorieActions.getAll);

export default router;
