import type { RequestHandler } from "express";
import articleRepository from "../article/articleRepository";
import crudUniversRepository from "./crudUniversRepository";

//réccupère univers par id de article
const getAll: RequestHandler = async (req, res, next) => {
  try {
    const { idA } = req.body;

    const univers = await crudUniversRepository.getIdUnivers(idA);

    //si larticle na pas d'univers
    if (univers.length === 0) {
      res.status(200).send({
        message: "appartient a aucun univers",
        sucssces: true,
        isUnivers: false,
      });
      return;
    }
    //récupère tout les articles de l'univers
    const articles = await crudUniversRepository.getAllById(univers[0].id);

    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
      isUnivers: true,
      articles: articles,
    });
    return;
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const { idA, idAAjouter } = req.body;
    if (idA === idAAjouter) {
      res.status(400).send({
        message: "l'article ne peut pas appartenir a lui meme",
        sucssces: false,
      });
      return;
    }
    //regarde si l'article parent a un univers
    const universParent = await crudUniversRepository.getIdUnivers(idA);

    //regarde si l'article a ajouter a un univers
    const universAAjouter =
      await crudUniversRepository.getIdUnivers(idAAjouter);

    //si il sont déja dans le meme univers
    if (universParent.length > 0 && universAAjouter.length > 0) {
      if (universParent[0].id === universAAjouter[0].id) {
        res.status(200).send({
          message: "l'article appartient déja a l'univers rien a changer",
          sucssces: true,
        });
        return;
      }
    }

    //si l'article parent n'a pas d'univers
    if (universParent.length === 0) {
      if (universAAjouter.length === 0) {
        //crée un univers
        const newUnivers = await crudUniversRepository.new();
        //ajouter les 2 articles a l'univers
        await crudUniversRepository.update(newUnivers.insertId, idA, 1);
        await crudUniversRepository.update(newUnivers.insertId, idAAjouter, 2);
      } else {
        //réccupère le dernier numero de lunivers de l'article a ajouter
        const artcileEndNumero = await crudUniversRepository.getEndNumero(
          universAAjouter[0].id,
        );
        //ajouter l'article parent a l'univers de l'article a ajouter
        await crudUniversRepository.update(
          universAAjouter[0].id,
          idA,
          artcileEndNumero[0].univers_numero + 1,
        );
      }
    } else {
      //si article parent a un univers
      //réccupère ancien l'article a ajouter avant de la modifier
      const articleAAjouter = await articleRepository.getAll(idAAjouter);

      //réccupère le dernier numero de lunivers de l'article parent
      const artcileEndNumero = await crudUniversRepository.getEndNumero(
        universParent[0].id,
      );
      //deplace l'article a ajouter dans l'univers de l'article parent
      await crudUniversRepository.update(
        universParent[0].id,
        idAAjouter,
        artcileEndNumero[0].univers_numero + 1,
      );

      //si avnat de le deplacer l'article a ajouter avait un univers
      if (universAAjouter.length !== 0) {
        //pour éviter les trou dans univers on enlève 1 a tout les articles apres celui univer ajouter
        await crudUniversRepository.remouve1Numero(
          universAAjouter[0].id,
          articleAAjouter[0].univers_numero,
        );

        //si il avait que 2 articles dans l'univers on suprime l'univers
        await crudUniversRepository.defIfSeul(universAAjouter[0].id);
      }
    }

    res.status(201).send({
      message: "artcile ajouter a l'univers avec succes",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  try {
    //récupère article a bouger
    const { idA, idU, action } = req.body;

    //récupère tout les articles de l'univers dans ordre
    const allArticleUnivers = await crudUniversRepository.getAllById(idU);

    //récupère l'article a bouger
    const article = await articleRepository.getAll(idA);

    //si action est de monter
    if (action === "up") {
      //récupère l'article qui est avant
      const articleAvant =
        await crudUniversRepository.getArticlByIdUniverAndNumero(
          idU,
          article[0].univers_numero - 1,
        );
      if (articleAvant.length === 0) {
        res.status(201).send({
          message:
            "request pris en compt sans modification c'est déja le plus haut",
          sucssces: true,
        });
        return;
      }
      //monte d'un cran l'article a bouger
      await crudUniversRepository.updateNumero(
        idA,
        article[0].univers_numero - 1,
      );
      //dessend d'un cran l'article qui est avant
      await crudUniversRepository.updateNumero(
        articleAvant[0].id,
        articleAvant[0].univers_numero + 1,
      );
    } else if (action === "down") {
      //récupère l'article qui est apres
      const articleAvant =
        await crudUniversRepository.getArticlByIdUniverAndNumero(
          idU,
          article[0].univers_numero + 1,
        );
      if (articleAvant.length === 0) {
        res.status(201).send({
          message:
            "request pris en compt sans modification c'est déja le plus bas",
          sucssces: true,
        });
        return;
      }
      //dessend d'un cran l'article a bouger
      await crudUniversRepository.updateNumero(
        idA,
        article[0].univers_numero + 1,
      );
      //met larticle avant a ancienne place de l'article a bouger
      await crudUniversRepository.updateNumero(
        articleAvant[0].id,
        article[0].univers_numero,
      );
    } else {
      //si action non reconnue
      res.status(400).send({
        message: "action non reconnue",
        sucssces: false,
      });
      return;
    }

    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

const del: RequestHandler = async (req, res, next) => {
  try {
    //récupère article a bouger
    const { idA, idU } = req.body;

    //récupère article avant de le modifier
    const article = await articleRepository.getAll(idA);

    //suprime l'article de l'univers
    await crudUniversRepository.del(idA);

    //remet en ordre les articles
    await crudUniversRepository.remouve1Numero(idU, article[0].univers_numero);

    //verifie que apres la supression il reste des articles dans l'univers
    await crudUniversRepository.defIfSeul(idU);

    res.status(201).send({
      message: "mettre un message",
      sucssces: true,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  add,
  getAll,
  update,
  del,
};
