import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import { NextFunction, Request, Response } from "express";
import categorieRepository from "./categorieRepository";

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const resutat = await categorieRepository.getAll();

    res.status(201).send({
      message: "categorie récupéré avec succès",
      sucssces: true,
      categorie: resutat,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
};
