import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class SaisonRepository {
  //crée une nouvelle serie
  async new(numero: number, idArticle: number) {
    const query = "INSERT INTO saison (numero, article_id) VALUES (?, ?);";

    const [resutat] = await databaseClient.query(query, [numero, idArticle]);

    return resutat as Result;
  }

  //réécupére une saison via son id
  async getById(idS: number) {
    const query = "SELECT * FROM saison WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [idS]);

    return rows as Rows;
  }

  //réécupére tout les saison de l'article
  async getByArticleId(idArticle: number) {
    const query = "SELECT * FROM saison WHERE article_id = ?;";

    const [rows] = await databaseClient.query(query, [idArticle]);

    return rows as Rows;
  }

  //enleve 1 au numero de la saison
  async remouve1Numero(numero: number, idA: number) {
    const query = `
UPDATE saison as s
INNER JOIN article as a
ON s.article_id = a.id
SET s.numero = s.numero - 1
WHERE s.article_id = ? AND s.numero > ?;
    `;
    const [resutat] = await databaseClient.query(query, [idA, numero]);

    return resutat as Result;
  }

  //rajoute 1 au numero de la saison
  async add1Numero(numero: number, idA: number) {
    const query = `
UPDATE saison as s
INNER JOIN article as a
ON s.article_id = a.id
SET s.numero = s.numero - 1
WHERE s.article_id = ? AND s.numero > ?;
    `;
    const [resutat] = await databaseClient.query(query, [idA, numero]);

    return resutat as Result;
  }

  async delById(idS: number) {
    const query = "DELETE FROM saison WHERE id = ?;";
    const [resutat] = await databaseClient.query(query, [idS]);

    return resutat as Result;
  }
}

export default new SaisonRepository();
