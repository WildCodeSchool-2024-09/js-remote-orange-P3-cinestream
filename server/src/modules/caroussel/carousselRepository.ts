import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class CarrousselRepository {
  //récupère les article les plus récent
  async getRecent(): Promise<Rows> {
    //recupère les 20 plus récent article
    const query = `
SELECT * FROM article 
WHERE publier=1 AND (date < CURRENT_DATE + INTERVAL 1 DAY OR date IS NULL)
ORDER BY date DESC 
LIMIT 40;
`;
    const [articleRecent] = await databaseClient.query(query, []);

    return articleRecent as Rows;
  }

  //récupère les article qui sont des filme
  async getFilms(): Promise<Rows> {
    //recupère les 20 plus récent article
    const query = `
SELECT * FROM article 
WHERE type = "film" AND publier=1;
`;
    const [articleRecent] = await databaseClient.query(query, []);

    return articleRecent as Rows;
  }

  //récupère les article qui sont des series
  async getSeries(): Promise<Rows> {
    //recupère les 20 plus récent article
    const query = `
SELECT * FROM article 
WHERE type = "serie" AND publier=1;
`;
    const [articleRecent] = await databaseClient.query(query, []);

    return articleRecent as Rows;
  }
}

export default new CarrousselRepository();
