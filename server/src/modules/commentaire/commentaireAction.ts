import type { RequestHandler } from "express";

//réccupère un commentaire par son id
const getById: RequestHandler = async (req, res, next) => {
  try {
    //récupérer le id de article et id de utilisateur
    // -> id de article dans le body sous le nom de idA
    // -> id utilisateur direct dans la request (req.userId)
    //récupérer le commentaire par son id
    //si le commentaire n'existe pas, retourner ""
    //sinon, retourner le commentaire
    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  try {
    //récupérer le id de article et id de utilisateur
    // -> id de article dans le body sous le nom de idA
    // -> id utilisateur direct dans la request (req.userId)
    //regarder si l'utilisateur a mis un commentaire sur cette article
    //si oui, mettre à jour le commentaire
    //sinon, créer un nouveau commentaire
    //retourner message succès
    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const getAll: RequestHandler = async (req, res, next) => {
  try {
    //récupérer le id de article
    // -> id de article dans le body sous le nom de idA
    //récupérer tout les commentaire de l'article
    //retourner les commentaire
    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
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
