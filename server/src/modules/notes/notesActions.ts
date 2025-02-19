import { el } from "@faker-js/faker/.";
import type { RequestHandler } from "express";
import type { Request } from "express";
import notesRepository from "./notesRepository";

interface CustomRequest extends Request {
  userId?: number;
}

const upadte: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    //récupérer id de article
    const { idA, note } = req.body;
    //récupère id de utilisateur
    const userId = Number(req.userId);

    //vérifie si la note est valide
    if (note < 0 || note > 5) {
      res.status(400).send({
        message: "note invalide",
        sucssces: false,
      });
      return;
    }

    //regarde si utilisateur a déjà noté l'article
    const notesUtilisateur = await notesRepository.getById(userId, idA);

    //si la note est différente de 0
    if (note !== 0) {
      //si l'utilisateur a déjà noté l'article
      if (notesUtilisateur.length > 0) {
        await notesRepository.update(userId, idA, note);
      } else {
        //si l'utilisateur n'a pas noté l'article
        await notesRepository.new(userId, idA, note);
      }
    } else {
      //si la note est égale a 0 et utilisateur a déjà noté l'article on la sup
      if (notesUtilisateur.length > 0) {
        await notesRepository.del(userId, idA);
      }
    }

    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const get: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    //récupérer id de article
    const { idA } = req.body;
    //récupère id de utilisateur
    const userId = Number(req.userId);

    //récupérer la note de l'utilisateur dans bd
    const notesUtilisateur = await notesRepository.getById(userId, idA);

    if (!(notesUtilisateur.length > 0)) {
      res.status(201).send({
        message: "notes défini par defaut",
        sucssces: true,
        notes: 0,
      });
      return;
    }

    res.status(201).send({
      message: "notes bien charger",
      sucssces: true,
      notes: notesUtilisateur[0].valeur,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  upadte,
  get,
};
