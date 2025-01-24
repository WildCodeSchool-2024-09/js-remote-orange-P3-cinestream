import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class EpisodeRepository {
  //crée une nouvelle serie
  async new(numero: number, idSaison: number) {
    const query = "INSERT INTO episode (numero, saison_id) VALUES (?, ?);";

    const [rows] = await databaseClient.query(query, [numero, idSaison]);

    return rows as { insertId: number };
  }

  //récupère le dernier episode de la saison
  async findEndNumeroById(idSaison: number, idArticle: number) {
    const query = `
SELECT e.* FROM episode as e
JOIN saison AS s ON e.saison_id = s.id
JOIN article AS a ON s.article_id = a.id
WHERE s.id = ? AND a.id = ?
ORDER BY e.numero DESC LIMIT 1;
`;

    const [rows] = await databaseClient.query(query, [idSaison, idArticle]);

    return rows as Rows;
  }

  //récupère tout les episode de l'article
  async getAllByIdArticle(idArticle: number) {
    const query = `
SELECT
    s.id as saison_id,
    s.numero as saison_numero,
    e.id as episode_id,
    e.numero as episode_numero,
    e.nom as episode_nom,
    e.description as episode_description,
    e.lien_video as episode_lien_video,
    e.image as episode_image
FROM saison as s
LEFT JOIN episode as e ON e.saison_id = s.id
WHERE s.article_id = ?
ORDER BY s.numero, e.numero;
    `;

    const [rows] = await databaseClient.query(query, [idArticle]);

    return rows as Rows;
  }
}

export default new EpisodeRepository();
