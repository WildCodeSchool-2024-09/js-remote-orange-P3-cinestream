import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import utilisateurRepository from "./utilisateurRepository";

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
      expiresIn: "7d",
    });

    res.send({
      message: "Connexion réussie",
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

const returnAdmin: RequestHandler = async (req, res, next) => {
  try {
    res.send({
      isAdmin: true,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  inscription,
  inscriptionAdmin,
  connexion,
  returnAdmin,
};
