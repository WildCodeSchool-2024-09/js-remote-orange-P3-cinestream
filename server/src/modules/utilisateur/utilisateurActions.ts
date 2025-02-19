import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import type { Request } from "express";
import jwt from "jsonwebtoken";
import type { Utilisateur } from "../../types/express";
import uploadDynamicImages from "../middlewares/multer";
import utilisateurRepository from "./utilisateurRepository";

interface CustomRequest extends Request {
  userId?: number;
  compte?: Utilisateur[];
  abonement?: { actif: boolean; date_fin: string }[];
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
      expiresIn: "2d",
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

const getProfile: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    const userId = Number(req.userId);
    const compte = req.compte as Utilisateur[];
    const abonement = req.abonement as { actif: boolean; date_fin: string }[];

    res.send({
      Message: "info récupéré avec succès",
      success: true,
      compte: {
        pseudo: compte[0].speudo,
        photo_profil: compte[0].photo_profil,
        abonement: abonement[0].actif,
        abonementExpire: abonement[0].date_fin,
        photoProfile: compte[0].photo_profil,
      },
    });
  } catch (err) {
    next(err);
  }
};

const updateProfile: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    const userId = Number(req.userId);
    const { pseudo } = req.body;

    //verifier si le pseudo est correct pour le mettre a jour
    if (
      pseudo.length >= 4 &&
      pseudo.length <= 30 &&
      /^[a-zA-Z0-9_-]+$/.test(pseudo)
    ) {
      utilisateurRepository.updateNom(userId, pseudo);
    }

    res.send({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const updatePhotoProfile: RequestHandler = async (
  req: CustomRequest,
  res,
  next,
) => {
  try {
    //récupérer l'id de l'utilisateur
    const userId = Number(req.userId);

    const results: {
      image: string | null;
    } = {
      image: null,
    };

    // Upload dynamique pour plusieurs fichiers
    const upload = uploadDynamicImages(
      ["newPhotoProfil"], // Champs dans formData
      (fieldName) => "utilisateur", // Dossier dynamique basé sur le champ
      (req, file) => `photo-profil-${userId}`, // Nom dynamique du fichier
    );

    upload(req, res, async (err) => {
      if (err) {
        console.error("Erreur upload : ", err.message);
        return res.status(400).send({ error: err.message });
      }

      if (req.files && typeof req.files === "object") {
        const files = req.files as { [key: string]: Express.Multer.File[] };

        if (files.newPhotoProfil) {
          results.image = `utilisateur/${files.newPhotoProfil[0].filename}`;
        }
      }
      //verifi qu'il a un truc a mettre a jour
      if (results.image) {
        await utilisateurRepository.updatePhotoProfil(userId, results);
      }

      // Réponse avec les chemins des fichiers uploadés
      res.status(200).json({
        message: "image bien mis a jour",
        success: true,
      });
    });
  } catch (err) {
    next(err);
  }
};

const buyAbonement: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    const userId = Number(req.userId);
    const abonement = req.abonement as { actif: boolean; date_fin: string }[];

    if (abonement[0].actif) {
      res.send({
        success: false,
        message: "Vous avez déjà un abonement actif",
      });
      return;
    }

    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    const finDuNouvellAbonement = date.toISOString().split("T")[0];

    const resultat = await utilisateurRepository.buyAbonnement(
      userId,
      finDuNouvellAbonement,
    );

    res.send({
      success: true,
      newDate: finDuNouvellAbonement,
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
  getProfile,
  updateProfile,
  buyAbonement,
  updatePhotoProfile,
};
