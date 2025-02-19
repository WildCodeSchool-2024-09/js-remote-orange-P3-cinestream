import type { Request, RequestHandler } from "express";
import carousselRepository from "./carousselRepository";

interface CustomRequest extends Request {
  userId?: number;
}

interface EpisodeSliderBrut {
  id: number;
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
  description: string | null;
}

interface EpisodeSlider {
  id: number;
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
  description?: string | null;
  isFavorie?: number;
}

function melangeurTableux(array: EpisodeSlider[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getRecent: RequestHandler = async (req, res, next) => {
  try {
    const articleBrut =
      (await carousselRepository.getRecent()) as EpisodeSliderBrut[];

    const article: EpisodeSlider[] = [];

    for (const element of articleBrut) {
      const elementExite = article.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        article.push({
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
      const index = article.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        article[index].categorie.push(element.categorie);
      }
    }

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      article: article.slice(0, 20),
    });
  } catch (err) {
    next(err);
  }
};

const getFilms: RequestHandler = async (req, res, next) => {
  try {
    const article = await carousselRepository.getFilms();

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      article: article,
    });
  } catch (err) {
    next(err);
  }
};

const getSeries: RequestHandler = async (req, res, next) => {
  try {
    const article = await carousselRepository.getSeries();

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      article: article,
    });
  } catch (err) {
    next(err);
  }
};

const getTopNotes: RequestHandler = async (req, res, next) => {
  try {
    const articleBrut = await carousselRepository.getTopNotes();

    const article: EpisodeSlider[] = [];

    for (const element of articleBrut) {
      const elementExite = article.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        article.push({
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
      const index = article.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        article[index].categorie.push(element.categorie);
      }
    }

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      topNotes: article.slice(0, 20),
    });
  } catch (err) {
    next(err);
  }
};

const getPrentation5: RequestHandler = async (
  req: CustomRequest,
  res,
  next,
) => {
  try {
    const userId = Number(req.userId);
    const presentationBrut =
      await carousselRepository.getPresentationAleatoire(userId);

    const presentation: EpisodeSlider[] = [];

    for (const element of presentationBrut) {
      const elementExite = presentation.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        presentation.push({
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
          description: element.description,
          isFavorie: element.isFavorie ? element.isFavorie : 0,
        });
      }

      //trouver l'index de l'element
      const index = presentation.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        presentation[index].categorie.push(element.categorie);
      }
    }

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      presentation5: melangeurTableux(presentation).slice(0, 5),
    });
  } catch (err) {
    next(err);
  }
};

const getFilmPlatforme: RequestHandler = async (req, res, next) => {
  try {
    const idP = Number(req.headers.idp);

    const articlePlatformeBrut = (await carousselRepository.getFilmPlatforme(
      idP,
    )) as EpisodeSliderBrut[];

    const articlePlatforme = [] as EpisodeSlider[];

    for (const element of articlePlatformeBrut) {
      const elementExite = articlePlatforme.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        articlePlatforme.push({
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
          description: element.description,
        });
      }

      //trouver l'index de l'element
      const index = articlePlatforme.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        articlePlatforme[index].categorie.push(element.categorie);
      }
    }

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      articlePlatforme: articlePlatforme,
    });
  } catch (err) {
    next(err);
  }
};

//les film qui on une certaine categorie
const getFilmCategorie: RequestHandler = async (req, res, next) => {
  try {
    const idC = Number(req.headers.idc);

    const articleCategorieBrut = (await carousselRepository.getFilmCategorie(
      idC,
    )) as EpisodeSliderBrut[];

    const articleCategorie = [] as EpisodeSlider[];

    for (const element of articleCategorieBrut) {
      const elementExite = articleCategorie.find(
        (e: EpisodeSlider) => e.id === element.id,
      );

      if (!elementExite) {
        articleCategorie.push({
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
          description: element.description,
        });
      }

      //trouver l'index de l'element
      const index = articleCategorie.findIndex(
        (e: EpisodeSlider) => e.id === element.id,
      );
      //lui ajouter la categorie si pas null
      if (element.categorie) {
        articleCategorie[index].categorie.push(element.categorie);
      }
    }

    res.status(200).send({
      message: "Article mis a jour et récupérer",
      sucssces: true,
      articleCategorie: articleCategorie,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getRecent,
  getFilms,
  getSeries,
  getTopNotes,
  getPrentation5,
  getFilmPlatforme,
  getFilmCategorie,
};
