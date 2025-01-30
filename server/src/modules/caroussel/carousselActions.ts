import type { RequestHandler } from "express";
import carousselRepository from "./carousselRepository";

const getRecent: RequestHandler = async (req, res, next) => {
  try {
    const article = await carousselRepository.getRecent();

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      article: article,
    });
  } catch (err) {
    next(err);
  }
};

const getFilms: RequestHandler = async (req, res, next) => {
  try {
    const article = await carousselRepository.getFilms();

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      article: article,
    });
  } catch (err) {
    next(err);
  }
};

const getSeries: RequestHandler = async (req, res, next) => {
  try {
    const article = await carousselRepository.getSeries();

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      article: article,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getRecent,
  getFilms,
  getSeries,
};
