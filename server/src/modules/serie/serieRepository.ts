import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class SerieRepository {
  //crée une nouvelle serie
  async new(type: string) {
    const query = "INSERT INTO article (type) VALUES(?)";

    const [rows] = await databaseClient.query(query, [type]);

    return rows as { insertId: number };
  }

  //crée une nouvelle serie
  async getAllSerie(recherche: string) {
    let query = "SELECT * FROM article";
    const values: string[] = [];

    if (recherche !== "") {
      query += " WHERE nom LIKE ?";
      values.push(`%${recherche}%`);
    }

    const [rows] = await databaseClient.query(query, values);
    return rows as Rows;
  }

  //récupèré toute les series publier
  async getAllSeriePublier() {
    const query = `
SELECT 
a.*, 
e.description AS description,
C.nom AS categorie
FROM article a
LEFT JOIN saison s ON a.id = s.article_id AND s.numero = 1
LEFT JOIN episode e ON s.id = e.saison_id AND e.numero = 1
LEFT JOIN categorie_article AS CA ON CA.article_id = a.id
LEFT JOIN categorie AS C ON C.id = CA.categorie_id
WHERE a.publier = 1
ORDER BY (a.nom = 'sans nom') ASC, a.nom ASC;
`;

    const [rows] = await databaseClient.query(query);

    return rows as Rows;
  }

  //crée une nouvelle serie
  async delAllById(id: number) {
    const query = "DELETE FROM article WHERE id = ?;";
    const [resutat] = await databaseClient.query(query, [id]);
    return resutat as Result;
  }
}

export default new SerieRepository();
