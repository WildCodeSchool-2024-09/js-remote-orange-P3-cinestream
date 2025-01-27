import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class NotesRepository {
  //crée une nouvelle note
  async new() {
    const query = "";

    const [result] = await databaseClient.query(query, []);

    return result as Result;
  }

  //récupère la notes d'un utilisateur sur un article
  async getById() {
    const query = "";

    const [rows] = await databaseClient.query(query, []);

    return rows as Rows;
  }

  //met a jour un article
  async update() {
    const query = "";

    const [result] = await databaseClient.query(query, []);

    return result as Result;
  }
}

export default new NotesRepository();
