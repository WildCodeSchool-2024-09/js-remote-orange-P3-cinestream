import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

interface Categorie {
  id: number;
  nom: string;
  image: string;
}

class CategorieRepository {
  //récupère tout les categories qui existe
  async getAll(): Promise<Rows> {
    // a faire
    const query = "SELECT * FROM categorie;";
    const [rows] = await databaseClient.query(query);

    return rows as Rows;
  }

  //récupère tout les categories selection de l'article
  async getAllSelect(id: number): Promise<Rows> {
    // récupère dans la bd tout les categories selection de l'article
    const query =
      "SELECT c.* FROM categorie c LEFT JOIN categorie_article ca ON c.id = ca.categorie_id WHERE ca.article_id = ?;";
    const [rows] = await databaseClient.query(query, [id]);

    return rows as Rows;
  }

  //update les categories d'un article
  async updateCategorieArticle(
    id: number,
    categorie: Categorie[],
  ): Promise<Rows> {
    //supprime toutes les categories de l'article
    await databaseClient.query(
      "DELETE FROM categorie_article WHERE article_id = ?;",
      [id],
    );

    //ajouter les nouvelles categories
    const newCategorie = categorie.map((c) => [id, c.id]);

    const query =
      "INSERT INTO categorie_article (article_id, categorie_id) VALUES ?;";

    //si il a pas de categories rien reture
    if (newCategorie.length === 0) {
      return [];
    }

    //ajoute les nouvelles categories
    const [rows] = await databaseClient.query(query, [newCategorie]);

    return rows as Rows;
  }
}

export default new CategorieRepository();
