import type { RequestHandler } from "express";
import deleteFilesInFolder from "../../hook/supprimerImage";
import episodeRepository from "../episode/episodeRepository";
import saisonRepository from "../episode/saisonRepository";
import serieRepository from "./serieRepository";

interface EpisodeSliderBrut {
  id: number;
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
  description: string | null;
}

interface EpisodeSlider {
  id: number;
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
  description: string | null;
}

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

    //crée une nouvelle serie
    const resutatNewArticle = await serieRepository.new(type);
    //crée une saison 1 a la serie
    const resultatNewSaison = await saisonRepository.new(
      1,
      resutatNewArticle.insertId,
    );
    //crée un premier episode a la saison 1
    await episodeRepository.new(1, resultatNewSaison.insertId);

    res.status(201).send({
      message: "Serie crée avec succès",
      sucssces: true,
      id: resutatNewArticle.insertId,
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

const getAllPublier: RequestHandler = async (req, res, next) => {
  try {
    const allarticleBrut =
      (await serieRepository.getAllSeriePublier()) as EpisodeSliderBrut[];

    const allArticle: EpisodeSlider[] = [];

    for (const element of allarticleBrut) {
      const elementExite = allArticle.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        allArticle.push({
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
          description: element.description,
        });
      }

      //trouver l'index de l'element
      const index = allArticle.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        allArticle[index].categorie.push(element.categorie);
      }
    }

    res.status(201).send({
      message: "Serie trouvé avec succès",
      sucssces: true,
      allArticle: allArticle,
    });
  } catch (err) {
    next(err);
  }
};

const del: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;

    //récupère tout les images de la serie a sup avant de sup la serie
    const allEpisode = await episodeRepository.getAllByIdArticle(id);

    //suprimme la serie
    const resutat = await serieRepository.delAllById(id);

    if (resutat.affectedRows === 0) {
      res.status(400).send({
        message: "Serie non trouvé",
        sucssces: false,
      });
      return;
    }

    //suprimme les images de article
    await deleteFilesInFolder("serieHaurisontal", `afficheHaurisontal-${id}`);
    await deleteFilesInFolder("serieVertical", `afficheVertical-${id}`);

    //suprimme les images de episode
    for (const episode of allEpisode) {
      await deleteFilesInFolder(
        "episode",
        `image_episode-${episode.episode_id}`,
      );
    }

    res.status(201).send({
      message: "Serie trouvé avec succès",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  cree,
  getAll,
  del,
  getAllPublier,
};
