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

  //crée une nouvelle serie
  async delAllById(id: number) {
    const query = "DELETE FROM article WHERE id = ?;";
    const [resutat] = await databaseClient.query(query, [id]);
    return resutat as Result;
  }
}

export default new SerieRepository();
