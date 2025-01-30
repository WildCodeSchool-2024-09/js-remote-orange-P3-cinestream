import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class EpisodeRepository {
  //crée une nouvelle serie
  async new(numero: number, idSaison: number) {
    const query = "INSERT INTO episode (numero, saison_id) VALUES (?, ?);";

    const [rows] = await databaseClient.query(query, [numero, idSaison]);

    return rows as { insertId: number };
  }

  //récupère un épisode par son id
  async getById(idEpisode: number) {
    const query = "SELECT * FROM episode WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [idEpisode]);

    return rows as Rows;
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

  //récupère tout les episode de d'une saison via son ids
  async getAllByIdSaison(idSaison: number) {
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
FROM episode as e
INNER JOIN saison as s ON e.saison_id = s.id
WHERE s.id = ?
ORDER BY s.numero, e.numero;
    `;

    const [rows] = await databaseClient.query(query, [idSaison]);

    return rows as Rows;
  }

  //récupère tout les episode de d'une saison via son numero
  async getAllByNumeroSaison(numero: number, idA: number) {
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
  FROM episode as e
  INNER JOIN saison as s ON e.saison_id = s.id
  WHERE s.numero = ? AND s.article_id = ?
  ORDER BY s.numero, e.numero;
      `;

    const [rows] = await databaseClient.query(query, [numero, idA]);

    return rows as Rows;
  }

  //récupère article par id d'un episode
  async getArticleByIdEpisode(idE: number) {
    const query = `
SELECT a.* 
FROM article a
JOIN saison s ON s.article_id = a.id
JOIN episode e ON e.saison_id = s.id
WHERE e.id = ?;
      `;

    const [rows] = await databaseClient.query(query, [idE]);

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

  async updateSetNumero(idE: number, nombre: number) {
    const query = "UPDATE episode SET numero = ? WHERE id = ?;";
    const [resutat] = await databaseClient.query(query, [nombre, idE]);

    return resutat as Result;
  }

  async updateSetNumeroAndSaison(
    idE: number,
    nombre: number,
    idSaison: number,
  ) {
    const query = "UPDATE episode SET numero = ?, saison_id = ? WHERE id = ?;";
    const [resutat] = await databaseClient.query(query, [
      nombre,
      idSaison,
      idE,
    ]);

    return resutat as Result;
  }

  //ajoute 1 au numero de l'episode a partir d'un certain numero
  async add1Numero(numero: number, idS: number) {
    const query = `
UPDATE episode as e
INNER JOIN saison as s
ON e.saison_id = s.id
SET e.numero = e.numero + 1
WHERE e.numero > ? AND e.saison_id = ?;
    `;
    const [resutat] = await databaseClient.query(query, [numero, idS]);

    return resutat as Result;
  }

  //enleve 1 au numero de l'episode a partir d'un certain numero
  async remouve1Numero(numero: number, idS: number) {
    const query = `
UPDATE episode as e
INNER JOIN saison as s
ON e.saison_id = s.id
SET e.numero = e.numero - 1
WHERE e.numero > ? AND e.saison_id = ?;
    `;
    const [resutat] = await databaseClient.query(query, [numero, idS]);

    return resutat as Result;
  }

  //suprimer un episode
  async delById(idE: number) {
    const query = "DELETE FROM episode WHERE id = ?;";
    const [resutat] = await databaseClient.query(query, [idE]);

    return resutat as Result;
  }
}

export default new EpisodeRepository();
