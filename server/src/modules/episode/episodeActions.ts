import type { RequestHandler } from "express";
import deleteFilesInFolder from "../../hook/supprimerImage";
import uploadDynamicImages from "../middlewares/multer";
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

const getById: RequestHandler = async (req, res, next) => {
  try {
    const { idE } = req.body;

    //verifi que les id sont bien la
    if (!idE) {
      res.status(400).send({
        message: "eurreur id incorrect",
      });
      return;
    }

    const episode = await episodeRepository.findById(idE);

    if (episode.length === 0) {
      res.status(404).send({
        message: "episode non trouvé",
        sucssces: false,
      });
      return;
    }

    res.status(201).send({
      message: "info de l'episode bien récupéré",
      sucssces: true,
      episode: episode[0],
    });
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  try {
    const { idE, nom, description, lien_video } = req.body;

    if (
      idE === null ||
      nom === null ||
      description === null ||
      lien_video === null
    ) {
      res.status(400).send({
        message: "Il manque des paramètres",
        sucssces: false,
      });
      return;
    }

    //mettre a jour le nom
    if (nom.length < 250) {
      await episodeRepository.updateNom(idE, nom);
    }

    //mettre a jour la description
    await episodeRepository.updateDescription(idE, description);

    //mettre a jour le lien vidéo
    if (lien_video.length < 250) {
      await episodeRepository.updateVideo(idE, lien_video);
    }

    res.status(201).send({
      message: "info de l'episode mis a jour",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const updateImage: RequestHandler = async (req, res, next) => {
  try {
    const idE = Number(req.headers.ide);

    const results: {
      image: string | null;
    } = {
      image: null,
    };

    // Upload dynamique pour plusieurs fichiers
    const upload = uploadDynamicImages(
      ["image"], // Champs dans formData
      (fieldName) => "episode", // Dossier dynamique basé sur le champ
      (req, file) => `image_episode-${idE}`, // Nom dynamique du fichier
    );

    upload(req, res, async (err) => {
      if (err) {
        console.error("Erreur upload : ", err.message);
        return res.status(400).send({ error: err.message });
      }

      if (req.files && typeof req.files === "object") {
        // req.files est un objet, on peut donc indexer avec "afficheVertical"
        const files = req.files as { [key: string]: Express.Multer.File[] }; // Assurer que req.files est un objet

        if (files.image) {
          results.image = `episode/${files.image[0].filename}`;
        }
      }
      //verifi qu'il a un truc a mettre a jour
      if (results.image) {
        await episodeRepository.updateImage(idE, results);
      }

      // Réponse avec les chemins des fichiers uploadés
      res.status(200).json({
        message: "image bien mis a jour",
        sucssces: true,
      });
    });
  } catch (err) {
    next(err);
  }
};

const del: RequestHandler = async (req, res, next) => {
  try {
    const { idE } = req.body;

    //suprimme l'episode de la bd
    const resutat = await episodeRepository.delAllById(idE);

    //verifi que l'episode a bien été suprimmé dans la bd
    if (resutat.affectedRows === 0) {
      res.status(400).send({
        message: "Serie non trouvé",
        sucssces: false,
      });
      return;
    }

    //suprimme les images
    deleteFilesInFolder("episode", `image_episode-${idE}`);

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
  getById,
  update,
  updateImage,
  del,
};
