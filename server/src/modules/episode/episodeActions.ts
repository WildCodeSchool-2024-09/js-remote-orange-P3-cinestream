import type { RequestHandler } from "express";
import episodeRepository from "./episodeRepository";
import saisonRepository from "./saisonRepository";

interface Episode {
  episode_description: string | null;
  episode_id: number;
  episode_image: string | null;
  episode_lien_video: string | null;
  episode_nom: string;
  episode_numero: number;
}

interface Saison {
  saison_id: number;
  saison_numero: number;
  episodes: Episode[];
}

const cree: RequestHandler = async (req, res, next) => {
  try {
    const { idArticle, saison } = req.body;

    if (!idArticle || !saison) {
      res.status(400).send({
        message: "Il manque des paramètres",
        sucssces: false,
      });
      return;
    }

    //récupére tout les saison de l'article
    const allSaison = await saisonRepository.getByArticleId(idArticle);

    //récupérer la saison
    const donnerSaison = allSaison.find((s) => s.numero === saison);

    let newSaison = null;
    if (!donnerSaison) {
      //crée une nouvelle saison
      newSaison = await saisonRepository.new(saison, idArticle);
    }

    //set id de la saison en fonction de la saison qui a été crée ou qui existe déjà
    const idSaison = donnerSaison ? donnerSaison.id : newSaison?.insertId;

    //récupérer le dernier episode de la saison
    const dernierEpisode = await episodeRepository.findEndNumeroById(
      idSaison,
      idArticle,
    );

    let numeroNewEpisode = 0;
    if (!dernierEpisode || dernierEpisode.length === 0) {
      numeroNewEpisode = 1;
    } else {
      numeroNewEpisode = dernierEpisode[0].numero + 1;
    }

    //crée un nouvel episode
    const resultat = await episodeRepository.new(numeroNewEpisode, idSaison);

    res.status(201).send({
      message: "Serie crée avec succès",
      sucssces: true,
      idArticle: idArticle,
      idEpisode: resultat.insertId,
      idSaison: idSaison,
    });
  } catch (err) {
    next(err);
  }
};

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const { idArticle } = req.body;

    if (!idArticle) {
      res.status(400).send({
        message: "Il manque des paramètres",
        sucssces: false,
      });
      return;
    }

    //récupére tout les episode de l'article dans un tableau bazzard
    const allEpisode = await episodeRepository.getAllByIdArticle(idArticle);

    const allEpisodeOrganiser: Saison[] = [];

    for (const ligne of allEpisode) {
      //récupérer l'id de la saison
      const saisonId = ligne.saison_id;

      // Vérifier si la saison existe déjà
      const saison = allEpisodeOrganiser.find((s) => s.saison_id === saisonId);

      if (!saison) {
        // Ajouter une nouvelle saison si elle n'existe pas encore
        allEpisodeOrganiser.push({
          saison_id: ligne.saison_id,
          saison_numero: ligne.saison_numero,
          episodes: [],
        });
      }

      // récupère index de la saison
      const indexAAjouter = allEpisodeOrganiser.findIndex(
        (s) => s.saison_id === saisonId,
      );
      //ajoute a la saison l'episode
      allEpisodeOrganiser[indexAAjouter].episodes.push({
        episode_id: ligne.episode_id,
        episode_numero: ligne.episode_numero,
        episode_nom: ligne.episode_nom,
        episode_description: ligne.episode_description,
        episode_lien_video: ligne.episode_lien_video,
        episode_image: ligne.episode_image,
      });
    }

    res.status(201).send({
      message: "tout les episode récupéré avec succès",
      sucssces: true,
      allEpisode: allEpisodeOrganiser,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  cree,
  getAll,
};
