import type { RequestHandler } from "express";
import carousselRepository from "./carousselRepository";

interface EpisodeSliderBrut {
  id: 27;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_numero: null | number;
  univers_id: null | number;
  categorie: string | null;
  moyenne_note: number;
}

interface EpisodeSlider {
  id: 27;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_numero: null | number;
  univers_id: null | number;
  categorie: string[];
  moyenne_note: number;
}

const getRecent: RequestHandler = async (req, res, next) => {
  try {
    const articleBrut =
      (await carousselRepository.getRecent()) as EpisodeSliderBrut[];

    const article: EpisodeSlider[] = [];

    for (const element of articleBrut) {
      const elementExite = article.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        article.push({
          id: element.id,
          nom: element.nom,
          date: element.date,
          image: element.image,
          image_rectangle: element.image_rectangle,
          publier: element.publier,
          premium: element.premium,
          type: element.type,
          univers_numero: element.univers_numero,
          univers_id: element.univers_id,
          categorie: [],
          moyenne_note: element.moyenne_note,
        });
      }

      //trouver l'index de l'element
      const index = article.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        article[index].categorie.push(element.categorie);
      }
    }

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

const getTopNotes: RequestHandler = async (req, res, next) => {
  try {
    const articleBrut = await carousselRepository.getTopNotes();

    const article: EpisodeSlider[] = [];

    for (const element of articleBrut) {
      const elementExite = article.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        article.push({
          id: element.id,
          nom: element.nom,
          date: element.date,
          image: element.image,
          image_rectangle: element.image_rectangle,
          publier: element.publier,
          premium: element.premium,
          type: element.type,
          univers_numero: element.univers_numero,
          univers_id: element.univers_id,
          categorie: [],
          moyenne_note: element.moyenne_note,
        });
      }

      //trouver l'index de l'element
      const index = article.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        article[index].categorie.push(element.categorie);
      }
    }

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      topNotes: article,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getRecent,
  getFilms,
  getSeries,
  getTopNotes,
};
