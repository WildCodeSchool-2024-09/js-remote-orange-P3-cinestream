import express from "express";
import itemActions from "./modules/item/itemActions";
import connection from "./modules/middlewares/connection";
import inscriptionIsbon from "./modules/middlewares/inscriptionIsbon";
import originResquet from "./modules/middlewares/originResquet";
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
  inscriptionIsbon.verifNom,
  inscriptionIsbon.verifMail,
  inscriptionIsbon.verifMotDePasse,
  inscriptionIsbon.verifMotDePasse2,
  utilisateurActions.utilisateurIsExist,
  utilisateurActions.inscription,
);
//connexion
router.post(
  "/api/connection",
  inscriptionIsbon.verifMail,
  inscriptionIsbon.verifMotDePasse,
  connection.connexionMail,
  connection.connexionMotDePasse,
  utilisateurActions.connexion,
);

//verifie si uttilisateur est admin
router.post("/api/isAdmin");

//crée un compte admin (uniquement via le serveur)
router.post(
  "/api/newAdmin",
  originResquet.serveur,
  inscriptionIsbon.verifNom,
  utilisateurActions.utilisateurIsExist,
  inscriptionIsbon.verifMail,
  inscriptionIsbon.verifMotDePasse,
  utilisateurActions.inscriptionAdmin,
);

export default router;
