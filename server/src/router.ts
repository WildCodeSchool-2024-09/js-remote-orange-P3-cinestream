import express from "express";
import articleActions from "./modules/article/articleActions";
import carousselActions from "./modules/caroussel/carousselActions";
import categorieActions from "./modules/categorie/categorieActions";
import commentaireAction from "./modules/commentaire/commentaireAction";
import crudUniversAction from "./modules/crudUnivers/crudUniversAction";
import detailUtilisateurAction from "./modules/detailUtilisateur/detailUtilisateurAction";
import episodeActions from "./modules/episode/episodeActions";
import favorieAction from "./modules/favorie/favorieAction";
import autentification from "./modules/middlewares/autentification";
import verifSaisi from "./modules/middlewares/verifSaisi";
import notesActions from "./modules/notes/notesActions";
import originResquet from "./modules/originResquet/originResquet";
import platformeActions from "./modules/platforme/platformeActions";
import serieActions from "./modules/serie/serieActions";
import utilisateurActions from "./modules/utilisateur/utilisateurActions";

const router = express.Router();
//a sup
import databaseClient from "../database/client";
import type { RequestHandler } from "express";
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const home: RequestHandler = async (req, res, next) => {
  try {
    const query = "SELECT * FROM categorie;";
    const [rows] = await databaseClient.query(query);

    res.status(201).send({
      message: "Serie crée avec succès",
      sucssces: true,
      data: {
        nom: "test",
        mail: "fefef@gmail.com",
        motDePasse: "fefef",
      },
      env: {
        DB_HOST: DB_HOST,
        DB_PORT: DB_PORT,
        DB_USER: DB_USER,
        DB_PASSWORD: DB_PASSWORD,
        DB_NAME: DB_NAME,
      },
      reponse: rows,
    });
  } catch (err: any) {
    // En cas d'erreur, renvoie une erreur avec un message approprié
    res.status(500).send({
      message: "Erreur lors de la connexion à la base de données",
      success: false,
      error: err.message,
      env: {
        DB_HOST: DB_HOST,
        DB_PORT: DB_PORT,
        DB_USER: DB_USER,
        DB_PASSWORD: DB_PASSWORD,
        DB_NAME: DB_NAME,
      },
    });
    next(err);
  }
};
//home teste
router.get(
  "/api",
  home,
);
//fin a sup

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

//actualise la photo de profile
router.post(
  "/api/compte/profile/updatePhotoProfile",
  autentification.tokenIsCorrect,
  utilisateurActions.updatePhotoProfile,
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

//---CRUD univers---
//récupère les univers d'une serie
router.post(
  "/api/backoffice/article/crudUnivers/get",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  crudUniversAction.getAll,
);

//add un article a un univers
router.post(
  "/api/backoffice/article/crudUnivers/add",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  crudUniversAction.add,
);

//monte ou dessend un article
router.post(
  "/api/backoffice/article/crudUnivers/update",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  crudUniversAction.update,
);

//suprime un article d'un univers
router.post(
  "/api/backoffice/article/crudUnivers/del",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  crudUniversAction.del,
);

//-----------Episode----------------
//crée un episode
router.post(
  "/api/backoffice/episode/new",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.cree,
);

//route pour déplacer un episode
router.post(
  "/api/backoffice/episode/mouve",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.mouve,
);

//récupère tout les episode d'une serie
router.post(
  "/api/backoffice/episode/getAll",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.getAll,
);

//récupère les info d'un episode
router.post(
  "/api/backoffice/episode/getById",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.getById,
);

//route pour actualiser les info d'un episode
router.post(
  "/api/backoffice/description/actualiser",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.update,
);

//route pouir atualiser l'image d'un episode
router.post(
  "/api/backoffice/description/actualiserImage",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.updateImage,
);

//suprimer un episode
router.post(
  "/api/backoffice/description/suprimer",
  autentification.tokenIsCorrect,
  autentification.utilisateurIsAdmin,
  episodeActions.del,
);

//-----------------utilisateur------------------------------
//-------page details-------
//récupère tout les episode d'une serie
router.post(
  "/api/utilisateur/details/getAllEpisode",
  detailUtilisateurAction.getAllEpisode,
);

//récupère tout les serie du meme univers
router.post(
  "/api/utilisateur/details/getAllUnivers",
  detailUtilisateurAction.getAllUnivers,
);

//route pour récupéré les étoiles d'un utilisateur
router.post(
  "/api/utilisateur/details/getNotesUtilisateur",
  autentification.tokenIsCorrect,
  notesActions.get,
);

//route pour mettre a jour les étoiles d'un utilisateur sur un article
router.post(
  "/api/utilisateur/details/updateNotesUtilisateur",
  autentification.tokenIsCorrect,
  notesActions.upadte,
);

//route pour récupéré état du favorie
router.post(
  "/api/utilisateur/details/getFavorie",
  autentification.tokenIsCorrect,
  favorieAction.getByIdUserArticle,
);

//route pour ajouté un article au favorie
router.post(
  "/api/utilisateur/details/updateFavorie",
  autentification.tokenIsCorrect,
  favorieAction.upadteUser,
);

//route pour récupéré le commentaire d'un utilisateur
router.get(
  "/api/utilisateur/details/commentaireUtilisateur",
  autentification.tokenIsCorrect,
  commentaireAction.getById,
);

//route pour récupéré le commentaire d'un utilisateur
router.post(
  "/api/utilisateur/details/commentaireUtilisateur/update",
  autentification.tokenIsCorrect,
  commentaireAction.update,
);

//route pour récupéré tout les commentaire d'un article
router.get(
  "/api/utilisateur/details/toutCommentaire",
  commentaireAction.getAll,
);

//-------homePage------
//Les 5 film
router.get(
  "/api/utilisateur/caroussel/presentation5",
  carousselActions.getPrentation5,
);
//Les 5 film avec un compte copnnecter
router.get(
  "/api/utilisateur/caroussel/presentation5Connecter",
  autentification.tokenIsCorrect,
  carousselActions.getPrentation5,
);

//filme qui on une certaine platforme
router.get(
  "/api/utilisateur/caroussel/platforme",
  carousselActions.getFilmPlatforme,
);

//filme qui on une certaine categorie
router.get(
  "/api/utilisateur/caroussel/categorie",
  carousselActions.getFilmCategorie,
);

//filme récent
router.get("/api/utilisateur/caroussel/recent", carousselActions.getRecent);

//filme populaire
router.get("/api/utilisateur/caroussel/topNotes", carousselActions.getTopNotes);

//que les filme
router.get("/api/utilisateur/caroussel/films", carousselActions.getFilms);

//que les series
router.get("/api/utilisateur/caroussel/series", carousselActions.getSeries);

//que les favorie
router.get(
  "/api/utilisateur/caroussel/favorie",
  autentification.tokenIsCorrect,
  favorieAction.getAllFavorieUtilisateur,
);

//----recherche----
//récupère tout les series/films
router.get(
  "/api/utilisateur/recherche/filmSerie/getAll",
  serieActions.getAllPublier,
);

export default router;
