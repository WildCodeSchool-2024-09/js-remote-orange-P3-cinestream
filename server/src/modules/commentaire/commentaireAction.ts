import type { Request, RequestHandler } from "express";
import utilisateurRepository from "../utilisateur/utilisateurRepository";
import commentaireRepository from "./commentaireRepository";

interface CustomRequest extends Request {
  userId?: number;
}

//réccupère un commentaire par son id
const getById: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    const idA = req.headers.ida;
    const userId = Number(req.userId);

    const userCommentaire = await commentaireRepository.getById(
      Number(idA),
      userId,
    );
    const photo_profil = await utilisateurRepository.getPhotoProfil(userId);

    if (userCommentaire.length === 0) {
      res.status(200).send({
        message: "commentaire vide récupéré",
        sucssces: true,
        userCommentaire: "",
        photo_profil: photo_profil[0].photo_profil,
      });
      return;
    }

    res.status(200).send({
      message: "commentaire récupéré avec succès",
      sucssces: true,
      userCommentaire: userCommentaire[0].contenu,
      photo_profil: photo_profil[0].photo_profil,
    });
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    const userId = Number(req.userId);
    const { idA, valeur } = req.body;

    const userCommentaire = await commentaireRepository.getById(
      Number(idA),
      userId,
    );

    //si utilisateur n'a pas de commentaire, créer un nouveau commentaire
    if (valeur === "") {
      //suprime le commentaire
      await commentaireRepository.del(Number(idA), userId);
    } else if (userCommentaire.length === 0) {
      //crée un nouveux commentaire
      await commentaireRepository.new(Number(idA), userId, valeur);
    } else {
      //sion on lui modifie son commentaire
      await commentaireRepository.update(Number(idA), userId, valeur);
    }

    res.status(200).send({
      message: "commentaire mis a jour avec succès",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const getAll: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    const idA = req.headers.ida;

    const allCommentaire = await commentaireRepository.getAll(Number(idA));

    const nbCommentaire = await commentaireRepository.getNbCommentaire(
      Number(idA),
    );
    const moyenneNotes = await commentaireRepository.getmoyenneNotes(
      Number(idA),
    );

    res.status(200).send({
      message: "mettre un message",
      sucssces: true,
      allCommentaire: allCommentaire,
      nbCommentaire: nbCommentaire[0].nb_commentaire,
      moyenneNotes: moyenneNotes[0].moyenne_note,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getById,
  getAll,
  update,
};
