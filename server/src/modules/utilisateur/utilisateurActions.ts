import bcrypt from "bcrypt";
import dotenv from "dotenv";
import type { Request, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { Utilisateur } from "../../types/express";
import utilisateurRepository from "./utilisateurRepository";

interface CustomRequest extends Request {
  userId?: string;
}

const inscription: RequestHandler = async (req, res, next) => {
  try {
    //récupér le boy de la requête
    const { nom, email, motDePasse } = req.body;
    //date actuelle
    const date = new Date();
    const dateFormatter = date.toISOString().split("T")[0];

    //hasher le mot de passe
    const motDePasseCrypte = await bcrypt.hash(motDePasse, 10);

    //mettre les données dans la base de données
    const items = await utilisateurRepository.create({
      nom,
      email,
      motDePasseCrypte,
      dateFormatter,
    });

    res.status(201).send({
      message: "Utilisateur créé avec succès",
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const inscriptionAdmin: RequestHandler = async (req, res, next) => {
  try {
    //récupér le boy de la requête
    const { nom, email, motDePasse } = req.body;
    //date actuelle
    const date = new Date();
    const dateFormatter = date.toISOString().split("T")[0];

    //hasher le mot de passe
    const motDePasseCrypte = await bcrypt.hash(motDePasse, 10);

    //mettre les données dans la base de données
    const items = await utilisateurRepository.createAdmin({
      nom,
      email,
      motDePasseCrypte,
      dateFormatter,
    });

    res.status(201).send({
      message: "Utilisateur créé avec succès",
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const connexion: RequestHandler = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      throw new Error("utilisateur non défini");
    }

    const SECRET_KEY = process.env.APP_SECRET;
    //verifer si la clé existe
    if (!SECRET_KEY) {
      throw new Error("APP_SECRET is not defined");
    }
    // généré un token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1d",
    });

    res.send({
      message: "Connexion réussie",
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

const utilisateurIsExist: RequestHandler = async (req, res, next) => {
  try {
    //récupér le boy de la requête
    const { email } = req.body;

    const compte = await utilisateurRepository.findByEmail(email);

    if (compte.length > 0) {
      res.send({
        message: "Cet addresse email est déjà utilisée",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const tokenIsCorrect: RequestHandler = async (
  req: CustomRequest,
  res,
  next,
) => {
  try {
    //récupér le boy de la requête
    const { token } = req.body;

    //récupér la clé secrete
    const SECRET_KEY = process.env.APP_SECRET;
    if (!SECRET_KEY) {
      throw new Error("APP_SECRET is not defined");
    }

    //récupére id utilisateur grace au token
    const TokenClaire = jwt.verify(token, SECRET_KEY);

    if (TokenClaire && typeof TokenClaire !== "string") {
      //récupér id utilisateur
      const userId = TokenClaire.userId;
      req.userId = userId;
      next();
    } else {
      res.send({
        message: "Token invalide",
      });
    }
  } catch (err) {
    next(err);
  }
};

const utilisateurIsAdmin: RequestHandler = async (
  req: CustomRequest,
  res,
  next,
) => {
  try {
    //récupér le boy de la requête
    const userId = Number(req.userId);

    //retour utilisateur complet
    const compte = (await utilisateurRepository.findAllById(
      userId,
    )) as Utilisateur[];

    if (compte.length === 1) {
      if (compte[0].is_admin) {
        res.send({
          isAdmin: true,
        });
      } else {
        res.send({
          isAdmin: false,
        });
      }
    } else {
      res.send({
        message: "Utilisateur non trouvé",
      });
    }
  } catch (err) {
    next(err);
  }
};

export default {
  inscription,
  inscriptionAdmin,
  utilisateurIsExist,
  connexion,
  utilisateurIsAdmin,
  tokenIsCorrect,
};
