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
ORDER BY A.date DESC;
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
ORDER BY moyenne_note DESC;
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

  //récupère les article qui font parti d'une platforme
  async getFilmPlatforme(idP: number): Promise<Rows> {
    const query = `
SELECT 
  A.*, 
  C.nom AS categorie,
  COALESCE(AVG(N.valeur), 0) AS moyenne_note,
  E.description AS description
FROM article AS A
LEFT JOIN notes AS N ON N.article_id = A.id
LEFT JOIN categorie_article AS CA ON CA.article_id = A.id
LEFT JOIN categorie AS C ON C.id = CA.categorie_id
LEFT JOIN saison as S ON S.article_id = A.id
LEFT JOIN episode as E ON E.saison_id = S.id
INNER JOIN plateforme_article AS PA ON PA.article_id = A.id
WHERE 
  PA.plateforme_id = ?
  AND S.numero = 1
  AND E.numero = 1
  AND A.publier = 1 
  AND (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL)
GROUP BY A.id, C.nom, E.description
ORDER BY A.id ASC;
`;
    const [articlePlatforme] = await databaseClient.query(query, [idP]);

    return articlePlatforme as Rows;
  }

  //récupère les article qui font parti d'une categorie
  async getFilmCategorie(idC: number): Promise<Rows> {
    const query = `
SELECT 
  A.*, 
  C.nom AS categorie,
  COALESCE(AVG(N.valeur), 0) AS moyenne_note,
  E.description AS description
FROM article AS A
INNER JOIN categorie_article AS CA_Filtre ON CA_Filtre.article_id = A.id AND CA_Filtre.categorie_id = ?
LEFT JOIN categorie_article AS CA ON CA.article_id = A.id
LEFT JOIN categorie AS C ON C.id = CA.categorie_id
LEFT JOIN notes AS N ON N.article_id = A.id
LEFT JOIN saison AS S ON S.article_id = A.id AND S.numero = 1
LEFT JOIN episode AS E ON E.saison_id = S.id AND E.numero = 1
WHERE 
  A.publier = 1 
  AND (A.date < CURRENT_DATE + INTERVAL 1 DAY OR A.date IS NULL)
GROUP BY A.id, C.nom, E.description
ORDER BY A.id ASC;
`;
    const [articlePlatforme] = await databaseClient.query(query, [idC]);

    return articlePlatforme as Rows;
  }
}

export default new CarrousselRepository();
