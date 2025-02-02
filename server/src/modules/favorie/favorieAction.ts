import type { Request, RequestHandler } from "express";
import favorieRepository from "./favorieRepository";

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

interface EpisodeSliderBrut {
  id: 27;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_numero: null | number;
  univers_id: null | number;
  categorie: string | null;
  moyenne_note: number;
}

interface EpisodeSlider {
  id: 27;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_numero: null | number;
  univers_id: null | number;
  categorie: string[];
  moyenne_note: number;
}

interface CustomRequest extends Request {
  userId?: number;
}

const getByIdUserArticle: RequestHandler = async (
  req: CustomRequest,
  res,
  next,
) => {
  try {
    const { idA } = req.body;
    const userId = Number(req.userId);

    const favorie = await favorieRepository.getByIdUserArticle(userId, idA);

    //si il y a un favorie
    if (favorie.length === 1) {
      res.status(200).send({
        message: "état favorie récupéré avec succès",
        sucssces: true,
        favorie: true,
      });
      return;
    }

    //si il a pas de favorie
    res.status(200).send({
      message: "état favorie récupéré avec succès",
      sucssces: true,
      favorie: false,
    });
  } catch (err) {
    next(err);
  }
};

const upadteUser: RequestHandler = async (req: CustomRequest, res, next) => {
  try {
    const { idA, favorie } = req.body;
    const userId = Number(req.userId);

    //essaye de récupérer le favorie
    const favorieExist = await favorieRepository.getByIdUserArticle(
      userId,
      idA,
    );

    let newFavorie = false;

    if (favorieExist.length > 0) {
      //si il y a un favorie
      await favorieRepository.del(userId, idA);
      newFavorie = false;
    } else {
      //si il n'y a pas de favorie
      await favorieRepository.add(userId, idA);
      newFavorie = true;
    }

    res.status(201).send({
      message: "favorie mis à jour avec succès",
      sucssces: true,
      favorie: newFavorie,
    });
  } catch (err) {
    next(err);
  }
};

const getAllFavorieUtilisateur: RequestHandler = async (
  req: CustomRequest,
  res,
  next,
) => {
  try {
    const userId = Number(req.userId);

    const favorieBrut = (await favorieRepository.getAllFavorie(
      userId,
    )) as EpisodeSliderBrut[];

    const favorie: EpisodeSlider[] = [];

    for (const element of favorieBrut) {
      const elementExite = favorie.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        favorie.push({
          id: element.id,
          nom: element.nom,
          date: element.date,
          image: element.image,
          image_rectangle: element.image_rectangle,
          publier: element.publier,
          premium: element.premium,
          type: element.type,
          univers_numero: element.univers_numero,
          univers_id: element.univers_id,
          categorie: [],
          moyenne_note: element.moyenne_note,
        });
      }

      //trouver l'index de l'element
      const index = favorie.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        favorie[index].categorie.push(element.categorie);
      }
    }

    //si il a pas de favorie
    res.status(200).send({
      message: "tout les favorie récupéré avec succès",
      sucssces: true,
      allFavorie: favorie,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getByIdUserArticle,
  upadteUser,
  getAllFavorieUtilisateur,
};
