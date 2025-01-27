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

  //récupère un épisode par son id et l'id de la saison et de l'article
  async findById(idEpisode: number) {
    const query = "SELECT * FROM episode WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [idEpisode]);

    return rows as Rows;
  }

  //mettre a jour le nom
  async updateNom(idE: number, nom: string) {
    const query = "UPDATE episode SET nom = ? WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [nom, idE]);

    return rows as Rows;
  }

  //mettre a jour la decsription
  async updateDescription(idE: number, description: string) {
    const query = "UPDATE episode SET description = ? WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [description, idE]);

    return rows as Rows;
  }

  //mettre a jour le lien vidéo
  async updateVideo(idE: number, video: string) {
    const query = "UPDATE episode SET lien_video = ? WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [video, idE]);

    return rows as Rows;
  }

  //mettre a jour image
  async updateImage(
    idE: number,
    results: {
      image: null | string;
    },
  ) {
    const query = "UPDATE episode SET image = ? WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [results.image, idE]);

    return rows as Rows;
  }

  //suprimer un episode
  async delAllById(idE: number) {
    const query = "DELETE FROM episode WHERE id = ?;";
    const [resutat] = await databaseClient.query(query, [idE]);

    return resutat as Result;
  }

  //enleve 1 au numero de l'episode a partir d'un certain numero
  async add1Numero(numero: number, idS: number) {
    const query = `
UPDATE episode as e
INNER JOIN saison as s
ON e.saison_id = ?
SET e.numero = e.numero - 1
WHERE e.numero > ?;
    `;
    const [resutat] = await databaseClient.query(query, [idS, numero]);

    return resutat as Result;
  }
}

export default new EpisodeRepository();
