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

  //mettre a jour les imaeg de la serie
  async updateImage(
    id: number,
    results: {
      afficheVertical: null | string;
      afficheHaurisontal: null | string;
    },
  ): Promise<void> {
    //recupère tout l'article
    let query = "UPDATE article SET";
    const update = [];
    const value = [];

    if (results.afficheVertical) {
      update.push("image = ?");
      value.push(results.afficheVertical);
    }

    if (results.afficheHaurisontal) {
      update.push("image_rectangle = ?");
      value.push(results.afficheHaurisontal);
    }
    //ajouter id
    query += ` ${update.join(", ")}`;
    query += " WHERE id = ?;";
    value.push(id);

    await databaseClient.query(query, value);
  }
}

export default new ItemRepository();
