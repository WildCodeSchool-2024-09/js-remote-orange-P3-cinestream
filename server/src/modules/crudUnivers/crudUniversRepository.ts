import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class CrudUniversRepository {
  //crée un nouveau commentaire
  async new() {
    const query = "INSERT INTO univers VALUES (NULL);";

    const [result] = await databaseClient.query(query, []);

    return result as Result;
  }

  //récupère id de l'univers par id de l'article
  async getIdUnivers(idA: number) {
    const query = `
SELECT u.* FROM article as a
INNER JOIN univers as u ON a.univers_id = u.id
WHERE a.id = ?;
  `;

    const [rows] = await databaseClient.query(query, [idA]);

    return rows as Rows;
  }

  //récupère tout les articles de l'univers
  async getAllById(idU: number) {
    const query = `
SELECT 
  a.*,
  e.description as description
FROM article as a
LEFT JOIN saison as s ON s.article_id = a.id AND s.numero = 1
LEFT JOIN episode as e ON e.saison_id = s.id AND e.numero = 1
WHERE a.univers_id = ? 
ORDER BY a.univers_numero ASC;
`;

    const [rows] = await databaseClient.query(query, [idU]);

    return rows as Rows;
  }

  //récupère article qui est dans un univer et qui a un numero préci
  async getArticlByIdUniverAndNumero(idU: number, numero: number) {
    const query =
      "SELECT * FROM article as a WHERE a.univers_id = ? AND a.univers_numero = ?;";

    const [rows] = await databaseClient.query(query, [idU, numero]);

    return rows as Rows;
  }

  //récupère le dernier numero du l'univers
  async getEndNumero(idU: number) {
    const query = `
SELECT * FROM article as a
INNER JOIN univers as u ON a.univers_id = u.id
WHERE a.univers_id = ?
ORDER BY a.univers_numero DESC
LIMIT 1;
  `;

    const [rows] = await databaseClient.query(query, [idU]);

    return rows as Rows;
  }

  //met a jour le commentaire d'un utilisateur
  async update(idUnivers: number, idArticle: number, univers_numero: number) {
    const query =
      "UPDATE article as a SET a.univers_id = ?, a.univers_numero = ? WHERE a.id = ?;";

    const [result] = await databaseClient.query(query, [
      idUnivers,
      univers_numero,
      idArticle,
    ]);

    return result as Result;
  }

  //met a jour le numero dorde dans univers
  async updateNumero(idArticle: number, univers_numero: number) {
    const query =
      "UPDATE article as a SET a.univers_numero = ? WHERE a.id = ?;";

    const [result] = await databaseClient.query(query, [
      univers_numero,
      idArticle,
    ]);

    return result as Result;
  }

  //enlève de 1 tout les numero d'univers après un certain numero
  async remouve1Numero(idU: number, numero: number) {
    const query = `
UPDATE article as a 
SET a.univers_numero = a.univers_numero - 1 
WHERE a.univers_id = ? AND a.univers_numero > ?;
    `;

    const [result] = await databaseClient.query(query, [idU, numero]);

    return result as Result;
  }

  //suprime un article d'un univers
  async del(idA: number) {
    const query =
      "UPDATE article as a SET a.univers_id = NULL, a.univers_numero = NULL WHERE a.id = ?;";

    const [result] = await databaseClient.query(query, [idA]);

    return result as Result;
  }

  //suprime un univers si il est seul
  async defIfSeul(idU: number) {
    const query = `
DELETE FROM univers 
WHERE id = ?
AND (SELECT COUNT(*) FROM article WHERE univers_id = ?) <= 1;
    `;

    const [result] = await databaseClient.query(query, [idU, idU]);

    return result as Result;
  }
}

export default new CrudUniversRepository();
