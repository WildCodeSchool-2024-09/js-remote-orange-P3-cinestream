import { ar, da } from "@faker-js/faker/.";
import type { RequestHandler } from "express";
import { NextFunction, Request, Response } from "express";
import categorieRepository from "../categorie/categorieRepository";
import articleRepository from "./articleRepository";

function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !Number.isNaN(date.getTime());
}

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;

    //verifi que id exite
    if (!id) {
      res.status(400).send({
        message: "eurreur id incorrect",
      });
      return;
    }

    //récupère les info de l'article
    const resutat = await articleRepository.getAll(id);

    if (resutat.length === 0) {
      res.status(404).send({
        message: "serie non trouvé",
      });
      return;
    }
    //récupère les categories de l'article et met a jour
    const categorieSelect = await categorieRepository.getAllSelect(id);

    res.status(201).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      serie: resutat[0],
      categorieSelect: categorieSelect,
    });
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  try {
    let { id, nom, date, publier, premium, categorie } = req.body;

    //verifi que id exite
    if (
      !id ||
      !nom ||
      date === undefined ||
      publier === undefined ||
      premium === undefined ||
      !categorie
    ) {
      res.status(400).send({
        message: "eurreur information incorrect",
      });
      return;
    }

    if (nom === "") {
      nom = "Sans titre";
    }
    //si le non est inferieur a 250 le mettre a jour sion non
    if (nom.length < 250) {
      await articleRepository.updateNom(id, nom);
    }

    //mettre a jour la date
    if (date !== "" && date.length === 10) {
      await articleRepository.updateDate(id, date);
    }

    await articleRepository.updatePublier(id, publier);
    await articleRepository.updatePremium(id, premium);

    //met a jour les categories
    await categorieRepository.updateCategorieArticle(id, categorie);

    res.status(201).send({
      message: "Article mis a jour",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  update,
};
