import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class CommentaireRepository {
  //crée un nouveau commentaire
  async new(idA: number, userId: number, contenu: string) {
    const query =
      "INSERT INTO commentaire (contenu, article_id, utilisateur_id) VALUES (?, ?, ?)";

    const [result] = await databaseClient.query(query, [contenu, idA, userId]);

    return result as Result;
  }

  //récupère le commentaire par son id utilisateur
  async getById(idA: number, userId: number) {
    const query =
      "SELECT * FROM commentaire WHERE article_id = ? AND utilisateur_id = ?";

    const [rows] = await databaseClient.query(query, [idA, userId]);

    return rows as Rows;
  }

  //récupère le nombre de commentaire poster sur un article
  async getNbCommentaire(idA: number) {
    const query =
      "SELECT COUNT(*) as nb_commentaire FROM commentaire WHERE article_id = ?;";

    const [rows] = await databaseClient.query(query, [idA]);

    return rows as Rows;
  }

  //récupère la moyenne des notes des commentaires d'un article
  async getmoyenneNotes(idA: number) {
    const query =
      "SELECT COALESCE(AVG(valeur), 0) as moyenne_note FROM notes WHERE article_id = ?;";

    const [rows] = await databaseClient.query(query, [idA]);

    return rows as Rows;
  }

  //récupère tout les commentaires d'un article
  async getAll(idA: number) {
    const query = `
SELECT
  c.contenu as comentaire,
  c.date as commentaire_date,
  n.valeur as note,
  u.speudo as nomUtilisateur,
  u.photo_profil as photo_utilisateur,
  u.is_admin as utilisateur_is_admin,
  c.article_id as article_id,
  c.utilisateur_id as utilisateur_id
FROM commentaire as c
LEFT JOIN utilisateur as u ON u.id = c.utilisateur_id
LEFT JOIN notes as n ON n.article_id = c.article_id AND n.utilisateur_id = c.utilisateur_id
WHERE c.article_id = ?
ORDER BY c.date DESC;
`;

    const [result] = await databaseClient.query(query, [idA]);

    return result as Result;
  }

  //met a jour le commentaire d'un utilisateur
  async update(idA: number, userId: number, contenu: string) {
    const query =
      "UPDATE commentaire SET contenu = ? WHERE article_id = ? AND utilisateur_id = ?";

    const [result] = await databaseClient.query(query, [contenu, idA, userId]);

    return result as Result;
  }
  //suprime un commentaire
  async del(idA: number, userId: number) {
    const query =
      "DELETE FROM commentaire WHERE article_id = ? AND utilisateur_id = ?";

    const [result] = await databaseClient.query(query, [idA, userId]);

    return result as Result;
  }
}

export default new CommentaireRepository();
