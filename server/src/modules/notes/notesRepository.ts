import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class NotesRepository {
  //crée une nouvelle note
  async new(userId: number, idA: number, note: number) {
    const query =
      "INSERT INTO notes (valeur, utilisateur_id, article_id) VALUES (?, ?, ?);";

    const [result] = await databaseClient.query(query, [note, userId, idA]);

    return result as Result;
  }

  //récupère la notes d'un utilisateur sur un article
  async getById(userId: number, idA: number) {
    const query =
      "SELECT * FROM notes WHERE article_id = ? AND utilisateur_id = ?;";

    const [rows] = await databaseClient.query(query, [idA, userId]);

    return rows as Rows;
  }

  //met a jour un article
  async update(userId: number, idA: number, note: number) {
    const query =
      "UPDATE notes SET valeur = ? WHERE article_id = ? AND utilisateur_id = ?;";

    const [result] = await databaseClient.query(query, [note, idA, userId]);

    return result as Result;
  }

  //suprime une note
  async del(userId: number, idA: number) {
    const query =
      "DELETE FROM notes WHERE article_id = ? AND utilisateur_id = ?;";

    const [result] = await databaseClient.query(query, [idA, userId]);

    return result as Result;
  }
}

export default new NotesRepository();
