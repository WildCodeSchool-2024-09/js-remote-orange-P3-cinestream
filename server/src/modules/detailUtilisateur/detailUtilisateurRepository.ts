import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class DetailUtilisateurRepository {
  //récupère tout les épisodes de la serie
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
        e.image as episode_image,
        a.type as article_type,
        a.date as article_date,
        a.premium as article_premium,
        c.nom as categorie
    FROM saison as s
    LEFT JOIN episode as e ON e.saison_id = s.id
    LEFT JOIN article as a ON a.id = s.article_id
    LEFT JOIN categorie_article as ca ON ca.article_id = a.id
    LEFT JOIN categorie as c ON c.id = ca.categorie_id
    WHERE s.article_id = ? AND a.publier = 1
    ORDER BY s.numero, e.numero;
        `;

    const [rows] = await databaseClient.query(query, [idArticle]);

    return rows as Rows;
  }

  //récupère tout les serie du meme univers
  async getAllByIdUnivers(idUnivers: number) {
    const query = `
SELECT 
  a.*,
  e.description AS description
FROM article as a
LEFT JOIN saison as s ON s.article_id = a.id
LEFT JOIN episode as e ON e.saison_id = s.id
WHERE
a.univers_id = ? AND
a.publier = 1 AND 
s.numero = 1 AND
e.numero = 1
ORDER BY a.univers_numero ASC;
        `;

    const [rows] = await databaseClient.query(query, [idUnivers]);

    return rows as Rows;
  }
}

export default new DetailUtilisateurRepository();
