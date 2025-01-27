import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

interface Platforme {
  id: number;
  nom: string;
  image: string;
}

class PlatformeRepository {
  //récupère tout les categories qui existe
  async getAll(): Promise<Rows> {
    // a faire
    const query = "SELECT * FROM plateforme;";
    const [rows] = await databaseClient.query(query);

    return rows as Rows;
  }

  //récupère tout les platforme selection de l'article
  async getAllSelect(id: number): Promise<Rows> {
    // récuper dans la bd tout les platforme selection de l'article
    const query =
      "SELECT p.* FROM plateforme p LEFT JOIN plateforme_article ca ON p.id = ca.plateforme_id WHERE ca.article_id = ?;";
    const [rows] = await databaseClient.query(query, [id]);

    return rows as Rows;
  }

  //update les platforme d'un article
  async updatePlatformeArticle(
    id: number,
    categorie: Platforme[],
  ): Promise<Rows> {
    //supprime toutes les platforme de l'article
    await databaseClient.query(
      "DELETE FROM plateforme_article WHERE article_id = ?;",
      [id],
    );

    //ajouter les nouvelles categories
    const newPlatforme = categorie.map((c) => [id, c.id]);

    const query =
      "INSERT INTO plateforme_article (article_id, plateforme_id) VALUES ?;";

    //si il a pas de categories rien reture
    if (newPlatforme.length === 0) {
      return [];
    }

    //ajoute les nouvelles categories
    const [rows] = await databaseClient.query(query, [newPlatforme]);

    return rows as Rows;
  }
}

export default new PlatformeRepository();
