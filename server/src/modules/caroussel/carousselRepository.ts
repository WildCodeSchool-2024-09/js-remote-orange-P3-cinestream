import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class CarrousselRepository {
  //récupère les article les plus récent
  async getRecent(): Promise<Rows> {
    //recupère les 20 plus récent article
    const query = `
SELECT
  A.*, 
  C.nom AS categorie,
  COALESCE(AVG(N.valeur), 0) AS moyenne_note
FROM article AS A
LEFT JOIN notes AS N ON N.article_id = A.id
LEFT JOIN categorie_article AS CA ON CA.article_id = A.id
LEFT JOIN categorie AS C ON C.id = CA.categorie_id
WHERE publier=1 AND (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL)
GROUP BY A.id, C.nom
ORDER BY A.date DESC 
LIMIT 40;
`;
    const [articleRecent] = await databaseClient.query(query, []);

    return articleRecent as Rows;
  }

  //récupère les article qui sont des filme
  async getFilms(): Promise<Rows> {
    //recupère les 20 plus récent article
    const query = `
SELECT A.*, E.description AS description
FROM article as A
LEFT JOIN saison as S ON S.article_id = A.id
LEFT JOIN episode as E ON E.saison_id = S.id
WHERE 
S.numero = 1 AND 
E.numero = 1 AND 
A.type = "film" AND 
A.publier=1
AND (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL);
`;
    const [articleRecent] = await databaseClient.query(query, []);

    return articleRecent as Rows;
  }

  //récupère les article qui sont des series
  async getSeries(): Promise<Rows> {
    //recupère les 20 plus récent article
    const query = `
SELECT A.*, E.description AS description
FROM article as A
LEFT JOIN saison as S ON S.article_id = A.id
LEFT JOIN episode as E ON E.saison_id = S.id
WHERE 
S.numero = 1 AND 
E.numero = 1 AND 
A.type = "serie" AND 
A.publier=1
AND (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL);
`;
    const [articleRecent] = await databaseClient.query(query, []);

    return articleRecent as Rows;
  }

  //récupère les article qui sont les mieux noté
  async getTopNotes(): Promise<Rows> {
    const query = `
SELECT
  A.*, 
  C.nom AS categorie,
  COALESCE(AVG(N.valeur), 0) AS moyenne_note
FROM article AS A
LEFT JOIN notes AS N ON N.article_id = A.id
LEFT JOIN categorie_article AS CA ON CA.article_id = A.id
LEFT JOIN categorie AS C ON C.id = CA.categorie_id
WHERE publier=1 AND (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL)
GROUP BY A.id, C.nom
ORDER BY moyenne_note DESC 
LIMIT 100;
`;
    const [articleTopNotes] = await databaseClient.query(query, []);

    return articleTopNotes as Rows;
  }

  //récupère 5 article aléatoire
  async getPresentationAleatoire(userId: number): Promise<Rows> {
    const param = [];
    let query = `
SELECT 
  A.*,
  C.nom AS categorie,
  COALESCE(AVG(N.valeur), 0) AS moyenne_note,
  E.description AS description
`;
    if (!Number.isNaN(userId)) {
      query += `
,
  IFNULL(F.article_id, 0) > 0 AS isFavorie
`;
    }
    query += `
FROM article AS A
LEFT JOIN notes AS N ON N.article_id = A.id
LEFT JOIN categorie_article AS CA ON CA.article_id = A.id
LEFT JOIN categorie AS C ON C.id = CA.categorie_id
`;
    if (!Number.isNaN(userId)) {
      query += `
LEFT JOIN favorie AS F ON F.article_id = A.id AND F.utilisateur_id = ?
`;
      param.push(userId);
    }
    query += `
      LEFT JOIN saison as S ON S.article_id = A.id
LEFT JOIN episode as E ON E.saison_id = S.id

WHERE publier = 1 AND
    (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL) AND
    S.numero = 1 AND
    E.numero = 1

GROUP BY A.id, E.description, C.nom
ORDER BY RAND()
    `;
    const [articleTopNotes] = await databaseClient.query(query, param);

    return articleTopNotes as Rows;
  }
}

export default new CarrousselRepository();
