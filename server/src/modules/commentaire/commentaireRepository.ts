import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class CommentaireRepository {
  //crée un nouveau commentaire
  async new() {
    const query = "";

    const [result] = await databaseClient.query(query, []);

    return result as Result;
  }

  //récupère tout les commentaires d'un article
  async getAll() {
    const query = "";

    const [result] = await databaseClient.query(query, []);

    return result as Result;
  }

  //récupère le commentaire par son id utilisateur
  async getById() {
    const query = "";

    const [rows] = await databaseClient.query(query, []);

    return rows as Rows;
  }

  //met a jour le commentaire d'un utilisateur
  async update() {
    const query = "";

    const [result] = await databaseClient.query(query, []);

    return result as Result;
  }
}

export default new CommentaireRepository();
