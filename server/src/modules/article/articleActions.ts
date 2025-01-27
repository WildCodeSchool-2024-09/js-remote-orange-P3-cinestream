import type { RequestHandler } from "express";
import categorieRepository from "../categorie/categorieRepository";
import uploadDynamicImages from "../middlewares/multer";
import platformeRepository from "../platforme/platformeRepository";
import articleRepository from "./articleRepository";

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
    //récupère les categories de l'article
    const categorieSelect = await categorieRepository.getAllSelect(id);

    //récupère les platforme de l'article
    const platformeSelect = await platformeRepository.getAllSelect(id);

    res.status(201).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      serie: resutat[0],
      categorieSelect: categorieSelect,
      platformeSelect: platformeSelect,
    });
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  try {
    let { id, nom, date, publier, premium, categorie, platforme } = req.body;
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
    //met a jour les platforme
    await platformeRepository.updatePlatformeArticle(id, platforme);

    res.status(201).send({
      message: "Article mis a jour",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const updateImage: RequestHandler = async (req, res, next) => {
  const id = Number(req.headers.id);
  const results: {
    afficheVertical: string | null;
    afficheHaurisontal: string | null;
  } = {
    afficheVertical: null,
    afficheHaurisontal: null,
  };

  // Upload dynamique pour plusieurs fichiers
  const upload = uploadDynamicImages(
    ["afficheVertical", "afficheHaurisontal"], // Champs dans formData
    (fieldName) =>
      fieldName === "afficheVertical" ? "serieVertical" : "serieHaurisontal", // Dossier dynamique basé sur le champ
    (req, file) => `${file.fieldname}-${id || "default"}`, // Nom dynamique du fichier
  );

  upload(req, res, async (err) => {
    if (err) {
      console.error("Erreur upload : ", err.message);
      return res.status(400).send({ error: err.message });
    }

    if (req.files && typeof req.files === "object") {
      // req.files est un objet, on peut donc indexer avec "afficheVertical"
      const files = req.files as { [key: string]: Express.Multer.File[] }; // Assurer que req.files est un objet

      if (files.afficheVertical) {
        results.afficheVertical = `serieVertical/${files.afficheVertical[0].filename}`;
      }

      if (files.afficheHaurisontal) {
        results.afficheHaurisontal = `serieHaurisontal/${files.afficheHaurisontal[0].filename}`;
      }
    }

    //verifi qu'il a un truc a mettre a jour
    if (results.afficheVertical || results.afficheHaurisontal) {
      await articleRepository.updateImage(id, results);
    }

    // Réponse avec les chemins des fichiers uploadés
    res.status(200).json({
      message: "Traitement terminé",
      sucssces: true,
    });
  });
};

export default {
  getAll,
  update,
  updateImage,
};
