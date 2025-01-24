import fs from "node:fs";
import path from "node:path";
import type { RequestHandler } from "express";
import episodeRepository from "../episode/episodeRepository";
import saisonRepository from "../episode/saisonRepository";
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

const del: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;

    const resutat = await serieRepository.delAllById(id);

    if (resutat.affectedRows === 0) {
      res.status(400).send({
        message: "Serie non trouvé",
        sucssces: false,
      });
      return;
    }

    //fonction pour supprimer les fichiers
    function deleteFilesInFolder(nomFicher: string, nom: string) {
      const racine = path.join(
        __dirname,
        `../../../public/uploads/${nomFicher}`,
      );
      // Vérifier que le dossier existe
      if (!fs.existsSync(racine)) {
        //si exite pas return null
        return;
      }
      // récupère tout les ficher du dossier
      const allFicher = fs.readdirSync(racine);

      // trouve les ficher qui on le nom a sup
      for (const ficher of allFicher) {
        // récupère le nom du ficher sans l'extension
        const ficherName = path.parse(ficher).name;

        // Si le nom correspond, supprimer le fichier
        if (ficherName === nom) {
          const chemainFicher = path.join(racine, ficher);
          // Supprimer le fichier
          fs.unlinkSync(chemainFicher);
        }
      }
    }

    //suprimme les images
    deleteFilesInFolder("serieHaurisontal", `afficheHaurisontal-${id}`);
    deleteFilesInFolder("serieVertical", `afficheVertical-${id}`);

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
};
