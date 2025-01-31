import type { RequestHandler } from "express";
import type { Request } from "express";
import notesRepository from "./notesRepository";

interface CustomRequest extends Request {
  userId?: number;
}


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

const get: RequestHandler = async (req:CustomRequest, res, next) => {
  try {
    //récupérer id de article
    const { idA } = req.body;
    //récupère id de utilisateur
    const userId = Number(req.userId);

    //récupérer la note de l'utilisateur dans bd
    const notesUtilisateur = await notesRepository.getById(userId, idA);

    if (!(notesUtilisateur.length > 0)){
      res.status(201).send({
        message: "notes défini par defaut",
        sucssces: true,
        notes:0,
      });
      return;
    }

    res.status(201).send({
      message: "notes bien charger",
      sucssces: true,
      notes:notesUtilisateur[0].valeur,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  upadte,
  get,
};
