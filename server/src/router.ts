import express from "express";
import itemActions from "./modules/item/itemActions";
import autentification from "./modules/middlewares/autentification";
import verifSaisi from "./modules/middlewares/verifSaisi";
import originResquet from "./modules/originResquet/originResquet";
import utilisateurActions from "./modules/utilisateur/utilisateurActions";

const router = express.Router();

//route par defaut a sup
router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

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

export default router;
