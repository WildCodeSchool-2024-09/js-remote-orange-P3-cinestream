import type { RequestHandler } from "express";
import utilisateurRepository from "../utilisateur/utilisateurRepository";

const nomCorrect: RequestHandler = async (req, res, next) => {
  try {
    const { nom } = req.body;
    if (!(nom.length >= 4 && nom.length <= 30)) {
      res.send({
        message: "le nom doit avoir entre 4 et 30 caractères",
      });
    } else if (!/^[a-zA-Z0-9_-]+$/.test(nom)) {
      res.send({
        message: "le nom peut avoir que - et _ comme caractères spéciaux",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const mailCorrect: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const regexEmail =
      /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,253}\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
      res.send({
        message: "l'email n'est pas valide",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const motDePasseCorrect: RequestHandler = async (req, res, next) => {
  try {
    const { motDePasse } = req.body;

    if (!/^\S+$/.test(motDePasse)) {
      res.send({
        message: "le mot de passe ne doit pas contenir d'espace",
      });
    } else if (!(motDePasse.length >= 8 && motDePasse.length <= 50)) {
      res.send({
        message: "le mot de passe doit avoir entre 8 et 50 caractères",
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const motDePasse2Correct: RequestHandler = async (req, res, next) => {
  try {
    const { motDePasse, motDePasse2 } = req.body;

    if (motDePasse !== motDePasse2) {
      res.send({
        message: "la confirmation du mot de passe ne correspond pas",
      });
    } else {
      next();
    }
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

export default {
  nomCorrect,
  mailCorrect,
  motDePasseCorrect,
  motDePasse2Correct,
  utilisateurIsExist,
};
