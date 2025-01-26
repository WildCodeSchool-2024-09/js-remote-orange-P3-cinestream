import type { RequestHandler } from "express";

const upadte: RequestHandler = async (req, res, next) => {
  try {
    //récupérer le id de article et id de utilisateur
    // -> id de article dans le body sous le nom de idA
    // -> id utilisateur direct dans la request (req.userId)
    //regarder si l'utilisateur a mis une notes sur cette article
    //si oui, mettre à jour la note
    //si non, créer une nouvelle note
    //retourner la note avec un status 200
    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const get: RequestHandler = async (req, res, next) => {
  try {
    //récupérer le id de article et id de utilisateur
    // -> id de article dans le body sous le nom de idA
    // -> id utilisateur direct dans la request (req.userId)
    //récupérer la note de l'utilisateur
    //si la note n'existe pas, retourner une note de 0
    //sinon, retourner la note
    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  upadte,
  get,
};
