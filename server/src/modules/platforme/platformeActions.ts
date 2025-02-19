import type { RequestHandler } from "express";
import platformeRepository from "./platformeRepository";

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const resutat = await platformeRepository.getAll();

    res.status(201).send({
      message: "platforme récupéré avec succès",
      sucssces: true,
      platforme: resutat,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
};
