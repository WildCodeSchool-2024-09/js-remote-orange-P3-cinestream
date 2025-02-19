import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class OriginResquetSQL {
  //crée un nouveau utilisateur
  async newToken(token: string) {
    const querySuprimmer = "DELETE FROM token_serveur;";
    const queryAjouter = "INSERT INTO token_serveur (token) VALUES(?);";
    try {
      await databaseClient.query(querySuprimmer);
      await databaseClient.query(queryAjouter, [token]);
    } catch (error) {
      console.error(error);
    }
  }

  async getToken() {
    const query = `
            SELECT token FROM token_serveur;
        `;
    try {
      const [rows] = await databaseClient.query(query);
      const result = rows as { token: string }[];

      if (result.length > 0) {
        return result[0].token;
      }

      console.warn("Aucun token trouvé dans la base de données.");
      return null;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new OriginResquetSQL();
