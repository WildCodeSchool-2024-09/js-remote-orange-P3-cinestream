import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import { NextFunction, Request, Response } from "express";
import serieRepository from "./serieRepository";

const cree: RequestHandler = async (req, res, next) => {
  try {
    const { type } = req.body;

    //verifie si le type est valide
    if (type !== "serie" && type !== "film") {
      res.status(400).send({
        message: "Type de contenu inconnu",
        id: null,
      });
      return;
    }

    const resutat = await serieRepository.new(type);

    res.status(201).send({
      message: "Serie crée avec succès",
      sucssces: true,
      id: resutat.insertId,
    });
  } catch (err) {
    next(err);
  }
};

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const { recherche } = req.body;

    const resutat = await serieRepository.getAllSerie(recherche);

    res.status(201).send({
      message: "Serie trouvé avec succès",
      sucssces: true,
      series: resutat,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  cree,
  getAll,
};
