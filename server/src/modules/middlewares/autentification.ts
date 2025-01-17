import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import type { Request, RequestHandler } from "express";
import type { Utilisateur } from "../../types/express";
import utilisateurRepository from "../utilisateur/utilisateurRepository";

interface CustomRequest extends Request {
  userId?: string;
}

const mail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    //récupére un utilisateur avec son mail
    const compte = await utilisateurRepository.findByEmail(email);

    if (compte.length < 1) {
      res.send({ message: "Compte introuvable" });
    } else if (compte.length > 1) {
      res.send({ message: "Erreur de connexion" });
    } else {
      req.user = compte[0];
      next();
    }
  } catch (err) {
    next(err);
  }
};

const motDePasse: RequestHandler = async (req, res, next) => {
  try {
    const { motDePasse } = req.body;
    const user = req.user;

    if (!user) {
      res.status(400).send({ message: "Utilisateur non défini" });
      return;
    }

    //récupére un utilisateur avec son mail
    const compte = (await utilisateurRepository.findMotDePasse(user.id)) as {
      password: string;
    }[];

    //décript le mot de passe
    const bonMotDePasse = await bcrypt.compare(motDePasse, compte[0].password);

    if (bonMotDePasse) {
      next();
    } else {
      res.send({ message: "Mot de passe incorrect" });
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

export default { mail, motDePasse, utilisateurIsAdmin, tokenIsCorrect };
