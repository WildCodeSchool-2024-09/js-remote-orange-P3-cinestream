import dotenv from "dotenv";
import type { Request, RequestHandler } from "express";

const serveur: RequestHandler = async (req, res, next) => {
  dotenv.config();
  // Récupérer l'URL du serveur depuis .env
  const serverUrl = process.env.SERVEUR_URL || "";

  // Vérifier l'en-tête Origin ou Referer pour l'URL de la requête
  const origin = req.headers.origin || req.headers.referer;

  if (origin?.startsWith(serverUrl)) {
    if (origin === serverUrl) {
      next();
    } else {
      res
        .status(403)
        .send({ message: "Requête non autorisée (origine invalide)" });
    }
  } else {
    // Si l'origine ne correspond pas, bloquer l'accès
    res
      .status(403)
      .json({ message: "Requête non autorisée (origine invalide)" });
  }
};

export default { serveur };
