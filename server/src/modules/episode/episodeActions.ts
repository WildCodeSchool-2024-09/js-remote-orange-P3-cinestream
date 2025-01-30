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

    //récupére l'episode
    const episode = await episodeRepository.getById(idE);

    //récuper larticle de episode
    const articleEpisode = await episodeRepository.getArticleByIdEpisode(idE);

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
      article: articleEpisode[0],
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
    const { idE, idS, idA } = req.body;

    // récupére tout les episode de larticle pour verifier qu'il au moins 2 episode
    const allEpisode = await episodeRepository.getAllByIdArticle(idA);

    if (allEpisode.length < 2) {
      //renvoie une réussie mais avec un message d'erreur
      res.status(200).send({
        message: "il faut au moins 2 episode",
        sucssces: true,
        nbNotCorrect: true,
      });
      return;
    }

    //récupére l épisode avant de le suprimmer
    const episode = await episodeRepository.getById(idE);

    //suprimme l'episode de la bd
    const resutat = await episodeRepository.delById(idE);

    //retire 1 au numero des episode suivant
    const resultat2 = await episodeRepository.remouve1Numero(
      episode[0].numero,
      idS,
    );

    //regadre si la saison contient toujour des episode
    const allEpisodeSaisonRestant =
      await episodeRepository.getAllByIdSaison(idS);
    //si il a plus d'episode dans la saison
    if (allEpisodeSaisonRestant.length === 0) {
      //récuper la saison avant de la sup
      const saison = await saisonRepository.getById(idS);
      //suprimme la saison
      await saisonRepository.delById(idS);

      //on réduit de 1 le numero des saison suivante
      await saisonRepository.remouve1Numero(saison[0].numero, idA);
    }

    //verifi que l'episode a bien été suprimmé dans la bd
    if (resutat.affectedRows === 0) {
      res.status(400).send({
        message: "Serie non trouvé",
        sucssces: false,
      });
      return;
    }

    //suprimme les images
    await deleteFilesInFolder("episode", `image_episode-${idE}`);

    res.status(201).send({
      message: "Serie trouvé avec succès",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const mouve: RequestHandler = async (req, res, next) => {
  try {
    const { idA, idS, idE, action } = req.body;

    //récupére l épisode
    const episode = await episodeRepository.getById(idE);

    //récupére tout les episode de la saison
    const allEpisodeSaison = await episodeRepository.getAllByIdSaison(idS);

    //verifi action
    if (action === "up") {
      //verifi que l'episode n'est pas le premier
      if (episode[0].numero === 1) {
        //récupére tout les episode de la saison d'avant
        const allEpisodeSaisonUp = await episodeRepository.getAllByNumeroSaison(
          allEpisodeSaison[0].saison_numero - 1,
          idA,
        );
        //verifi que la saison n'est pas la première
        if (allEpisodeSaisonUp.length === 0) {
          res.status(202).send({
            message: "vous pouvez pas monter l'épisode plus haut",
            sucssces: true,
          });
          return;
        }
        //met a jour le numero de l'episode et ca saison
        await episodeRepository.updateSetNumeroAndSaison(
          idE,
          allEpisodeSaisonUp[allEpisodeSaisonUp.length - 1].episode_numero + 1,
          allEpisodeSaisonUp[0].saison_id,
        );
        //retirer 1 au numero des episode suivant de son acienne saison
        //met a jour le numero a 1 et la saison
        await episodeRepository.remouve1Numero(
          0,
          allEpisodeSaison[0].saison_id,
        );
        //si caitai le seul episode de la saison suprimme la saison
        if (allEpisodeSaison.length === 1) {
          //suprimme la saison
          await saisonRepository.delById(idS);
          //on réduit de 1 le numero des saison suivante
          await saisonRepository.remouve1Numero(
            allEpisodeSaison[0].saison_numero,
            idA,
          );
        }
      } else {
        //met a jour le numero de l'episode
        await episodeRepository.updateSetNumero(
          episode[0].id,
          episode[0].numero - 1,
        );

        //trouve episode qui va être remplacer
        const episodeRemplacer = allEpisodeSaison.find(
          (e) => e.episode_numero === episode[0].numero - 1,
        );
        if (!episodeRemplacer) {
          res.status(400).send({
            message: "une eureur interne est survenue",
            sucssces: false,
          });
          return;
        }
        //met a jour le numero de l'episode que le up va remplacer
        await episodeRepository.updateSetNumero(
          episodeRemplacer.episode_id,
          episode[0].numero,
        );
      }
    } else if (action === "down") {
      //verifi que l'episode n'est pas le dernier
      if (
        episode[0].numero ===
        allEpisodeSaison[allEpisodeSaison.length - 1].episode_numero
      ) {
        //récupére tout les episode de la saison d'aprest
        const allEpisodeSaisonDown =
          await episodeRepository.getAllByNumeroSaison(
            allEpisodeSaison[0].saison_numero + 1,
            idA,
          );
        //verifi que la saison n'est pas la dernière
        if (allEpisodeSaisonDown.length === 0) {
          res.status(202).send({
            message: "vous pouvez pas monter l'épisode plus bas",
            sucssces: true,
          });
          return;
        }
        //redessend le numero des episode suivant
        await episodeRepository.add1Numero(
          0,
          allEpisodeSaisonDown[0].saison_id,
        );
        //met a jour le numero a 1 et la saison
        await episodeRepository.updateSetNumeroAndSaison(
          idE,
          1,
          allEpisodeSaisonDown[0].saison_id,
        );
        //si caitai le seul episode de la saison suprimme la saison
        if (allEpisodeSaison.length === 1) {
          //suprimme la saison
          await saisonRepository.delById(idS);
          //on réduit de 1 le numero des saison suivante
          await saisonRepository.remouve1Numero(
            allEpisodeSaison[0].saison_numero,
            idA,
          );
        }
      } else {
        //met a jour le numero de l'episode
        await episodeRepository.updateSetNumero(
          episode[0].id,
          episode[0].numero + 1,
        );

        //trouve episode qui va être remplacer
        const episodeRemplacer = allEpisodeSaison.find(
          (e) => e.episode_numero === episode[0].numero + 1,
        );
        if (!episodeRemplacer) {
          res.status(400).send({
            message: "une eureur interne est survenue",
            sucssces: false,
          });
          return;
        }
        //met a jour le numero de l'episode que le up va remplacer
        await episodeRepository.updateSetNumero(
          episodeRemplacer.episode_id,
          episode[0].numero,
        );
      }
    } else {
      //si action non reconnu renvoie une erreur
      res.status(400).send({
        message: "action non reconnu",
        sucssces: false,
      });
      return;
    }

    res.status(201).send({
      message: "episode déplacé avec succès",
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
  mouve,
};
