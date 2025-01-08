import bcrypt from "bcrypt";
import type { Request, RequestHandler } from "express";
import type { Utilisateur } from "../../types/express";
import utilisateurRepository from "../utilisateur/utilisateurRepository";

const connexionMail: RequestHandler = async (req, res, next) => {
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

const connexionMotDePasse: RequestHandler = async (req, res, next) => {
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

export default { connexionMail, connexionMotDePasse };
