import { ar } from "@faker-js/faker/.";
import type { RequestHandler } from "express";
import articleRepository from "../article/articleRepository";
import detailUtilisateurRepository from "./detailUtilisateurRepository";

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
  article_type: string;
}

//réccupère univers par id de article
const getAllEpisode: RequestHandler = async (req, res, next) => {
  try {
    const { idA } = req.body;

    const allEpisode = await detailUtilisateurRepository.getAllByIdArticle(idA);

    if (allEpisode.length === 0) {
      res.status(404).send({
        message: "Aucun episode trouvé",
        sucssces: false,
      });
      return;
    }

    //prganiser les episodes par saison
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
          article_type: ligne.article_type,
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

    //retourner les episodes
    res.status(200).send({
      message: "Serie récupéré avec succès",
      sucssces: true,
      allEpisode: allEpisodeOrganiser,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUnivers: RequestHandler = async (req, res, next) => {
  try {
    const { idA } = req.body;
    //récupère un article
    const article = await articleRepository.getAll(idA);

    //récupère tout les serie du meme univers
    const allSerieUnivers = await detailUtilisateurRepository.getAllByIdUnivers(
      article[0].univers_id,
    );

    //retourner les episodes
    res.status(200).send({
      message: "Serie récupéré avec succès",
      sucssces: true,
      allEpisodeUnivers: allSerieUnivers,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getAllEpisode,
  getAllUnivers,
};
