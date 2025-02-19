import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class FavorieRepository {
  //récupérer les favorie d'un utilisateur
  async getByIdUserArticle(userId: number, idArticle: number) {
    const query =
      "SELECT * FROM favorie WHERE utilisateur_id = ? AND article_id = ?;";

    const [rows] = await databaseClient.query(query, [userId, idArticle]);

    return rows as Rows;
  }

  //récupérer tout les favorie d'un utilisateur
  async getAllFavorie(userId: number) {
    const query = `
SELECT
  A.*, 
  C.nom AS categorie,
  COALESCE(AVG(N.valeur), 0) AS moyenne_note
FROM article AS A
INNER JOIN favorie AS F ON F.article_id = A.id AND F.utilisateur_id = ?
LEFT JOIN notes AS N ON N.article_id = A.id
LEFT JOIN categorie_article AS CA ON CA.article_id = A.id
LEFT JOIN categorie AS C ON C.id = CA.categorie_id
WHERE A.publier = 1 AND (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL)
GROUP BY A.id, C.nom
ORDER BY F.date_ajout DESC;
`;

    const [rows] = await databaseClient.query(query, [userId]);

    return rows as Rows;
  }

  //suprime le favorie
  async del(userId: number, idArticle: number) {
    const query =
      "DELETE FROM favorie WHERE utilisateur_id = ? AND article_id = ?;";

    const [rows] = await databaseClient.query(query, [userId, idArticle]);

    return rows as Rows;
  }

  //ajoute le favorie
  async add(userId: number, idArticle: number) {
    const query =
      "INSERT INTO favorie (utilisateur_id, article_id) VALUES (?, ?);";

    const [rows] = await databaseClient.query(query, [userId, idArticle]);

    return rows as Rows;
  }
}

export default new FavorieRepository();
