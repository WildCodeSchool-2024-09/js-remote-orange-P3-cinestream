import express from "express";
import multer from "multer";
import articleActions from "./modules/article/articleActions";
import categorieActions from "./modules/categorie/categorieActions";
import episodeActions from "./modules/episode/episodeActions";
import autentification from "./modules/middlewares/autentification";
import verifSaisi from "./modules/middlewares/verifSaisi";
import originResquet from "./modules/originResquet/originResquet";
import platformeActions from "./modules/platforme/platformeActions";
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

//--------Gestion de son profile---------
//récupère les info de l'utilisateur
router.post(
  "/api/compte/profile/get",
  autentification.tokenIsCorrect,
  autentification.abonementActif,
  utilisateurActions.getProfile,
);
//actualise les info de l'utilisateur
router.post(
  "/api/compte/profile/update",
  autentification.tokenIsCorrect,
  utilisateurActions.updateProfile,
);

//payer un abonement de 1mois
router.post(
  "/api/compte/profile/buyAbonement",
  autentification.tokenIsCorrect,
  autentification.abonementActif,
  utilisateurActions.buyAbonement,
);

//--------BACKOFFICE---------
//crée une serie
router.post(
  "/api/backoffice/serie/new",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  serieActions.cree,
);

//suprimer une serie
router.post(
  "/api/backoffice/serie/suprimer",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  serieActions.del,
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

//route popur actualiser les image
router.post(
  "/api/backoffice/article/infoGeneral/actualiserImage",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  articleActions.updateImage,
);

//routes pour récupérer tout les categories quie exite
router.get("/api/categorie/getAll", categorieActions.getAll);

//routes pour récupérer tout les platforme quie exite
router.get("/api/platforme/getAll", platformeActions.getAll);

//-----------Episode----------------
//crée un episode
router.post(
  "/api/backoffice/episode/new",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.cree,
);

//récupère tout les episode d'une serie
router.post(
  "/api/backoffice/episode/getAll",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.getAll,
);

export default router;
