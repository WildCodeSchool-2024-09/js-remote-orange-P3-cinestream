import crypto from "node:crypto";
import dotenv from "dotenv";
import type { Request, RequestHandler } from "express";
import type { NextFunction, Response } from "express";
import originResquetSQL from "./originResquetSQL";

const serveur: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  dotenv.config();
  // Récupérer l'URL du serveur depuis .env
  const serverUrl = process.env.SERVEUR_URL || "";

  // Vérifier l'en-tête Origin ou Referer pour l'URL de la requête
  const origin = req.headers.origin || req.headers.referer;

  if (origin?.startsWith(serverUrl)) {
    if (origin === serverUrl) {
      next();
      return;
    }
    res
      .status(403)
      .send({ message: "Requête non autorisée (origine invalide)" });
    return;
  }
  // Si l'origine ne correspond pas, bloquer l'accès
  res.status(403).send({ message: "Requête non autorisée (origine invalide)" });
  return;
};

//pas un midelware juste une fonction
const setTokenServeur = async () => {
  const token = crypto.randomBytes(32).toString("hex");
  try {
    await originResquetSQL.newToken(token);
  } catch (error) {
    console.error(error);
  }
};

const checkTokenServeur: RequestHandler = async (req, res, next) => {
  //récupér le boy de la requête
  const { token } = req.body;
  const serveurToken = await originResquetSQL.getToken();
  if (token === serveurToken) {
    next();
  } else {
    res.status(403).send({
      message:
        "Requête non autorisée (cette request ne provint pas du serveur)",
    });
  }
};

export default { serveur, setTokenServeur, checkTokenServeur };
