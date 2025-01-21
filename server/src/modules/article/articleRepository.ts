import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class ItemRepository {
  //crée une nouvelle serie
  async getAll(id: number): Promise<Rows> {
    //recupère tout l'article
    const query2 = "SELECT * FROM article WHERE id = ?;";
    const [articleResult] = await databaseClient.query(query2, [id]);

    return articleResult as Rows;
  }

  //mettre a jour un élément
  async updateNom(id: number, valeur: string): Promise<Rows> {
    //recupère tout l'article
    const query2 = "UPDATE article SET nom = ? WHERE id = ?;";
    const [articleResult] = await databaseClient.query(query2, [valeur, id]);

    return articleResult as Rows;
  }

  //mettre a jour un élément
  async updateDate(id: number, valeur: string): Promise<Rows> {
    //recupère tout l'article
    const query2 = "UPDATE article SET date = ? WHERE id = ?;";
    const [articleResult] = await databaseClient.query(query2, [valeur, id]);

    return articleResult as Rows;
  }

  //mettre a jour un élément
  async updatePublier(id: number, valeur: boolean): Promise<Rows> {
    //recupère tout l'article
    const query2 = "UPDATE article SET publier = ? WHERE id = ?;";
    const [articleResult] = await databaseClient.query(query2, [valeur, id]);

    return articleResult as Rows;
  }

  //mettre a jour un élément
  async updatePremium(id: number, valeur: boolean): Promise<Rows> {
    //recupère tout l'article
    const query2 = "UPDATE article SET premium = ? WHERE id = ?;";
    const [articleResult] = await databaseClient.query(query2, [valeur, id]);

    return articleResult as Rows;
  }
}

export default new ItemRepository();
