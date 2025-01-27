import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class SaisonRepository {
  //crée une nouvelle serie
  async getByArticleId(idArticle: number) {
    const query = "SELECT * FROM saison WHERE article_id = ?;";

    const [rows] = await databaseClient.query(query, [idArticle]);

    return rows as Rows;
  }

  //crée une nouvelle serie
  async new(numero: number, idArticle: number) {
    const query = "INSERT INTO saison (numero, article_id) VALUES (?, ?);";

    const [resutat] = await databaseClient.query(query, [numero, idArticle]);

    return resutat as Result;
  }
}

export default new SaisonRepository();
