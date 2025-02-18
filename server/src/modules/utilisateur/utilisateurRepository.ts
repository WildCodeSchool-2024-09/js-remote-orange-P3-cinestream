import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Utilisateur } from "../../types/express";

interface Resulte {
  reussi: boolean;
}

interface CreateUserParams {
  nom?: string;
  email?: string;
  motDePasseCrypte?: string;
  dateFormatter?: string;
}

class UtilisateurRepository {
  //crée un nouveau utilisateur
  async create({
    nom,
    email,
    motDePasseCrypte,
    dateFormatter,
  }: CreateUserParams) {
    const query = `
            INSERT INTO utilisateur (mail, password, speudo, date_inscription)
            VALUES(?, ?, ?, ?)
        `;
    const [resultat] = await databaseClient.query<Result>(query, [
      email,
      motDePasseCrypte,
      nom,
      dateFormatter,
    ]);

    await databaseClient.query(
      "INSERT INTO abonement (actif, utilisateur_id) VALUES (0, ?);",
      [resultat.insertId],
    );
  }

  //crée un utilisateur admin
  async createAdmin({
    nom,
    email,
    motDePasseCrypte,
    dateFormatter,
  }: CreateUserParams): Promise<void> {
    const query = `
            INSERT INTO utilisateur (mail, password, speudo, date_inscription, is_admin)
            VALUES(?, ?, ?, ?, 1)
        `;
    const [resultat] = await databaseClient.query<Result>(query, [
      email,
      motDePasseCrypte,
      nom,
      dateFormatter,
    ]);

    await databaseClient.query(
      "INSERT INTO abonement (actif, utilisateur_id) VALUES (0, ?);",
      [resultat.insertId],
    );
  }

  //récupére un utilisateur avec son mail
  async findByEmail(email: string): Promise<Utilisateur[]> {
    const query = `
            SELECT * FROM utilisateur WHERE mail = ?
        `;

    const [rows] = await databaseClient.query(query, [email]);

    return rows as Utilisateur[];
  }

  async findMotDePasse(id: number) {
    const query = `
            SELECT password FROM utilisateur WHERE id = ?
        `;

    const [rows] = await databaseClient.query(query, [id]);
    return rows;
  }

  async findAllById(id: number) {
    const query = `
            SELECT * FROM utilisateur WHERE id = ?
        `;

    const [rows] = await databaseClient.query(query, [id]);
    return rows as Rows;
  }

  async findAbonnementById(id: number) {
    const query = "SELECT * FROM abonement WHERE utilisateur_id = ?;";

    const [rows] = await databaseClient.query(query, [id]);
    return rows;
  }

  //récupéré la photo de profile d'un utilisateur
  async getPhotoProfil(id: number) {
    const query = "SELECT photo_profil FROM utilisateur WHERE id = ?;";

    const [rows] = await databaseClient.query(query, [id]);
    return rows as Rows;
  }

  //actualise si abonement est actif
  async actualiserAbonement(id: number) {
    const query =
      "UPDATE abonement SET actif = 0 WHERE date_fin < NOW() AND utilisateur_id = ?;";

    const [rows] = await databaseClient.query(query, [id]);
    return rows;
  }

  //mettre a jour le nom
  async updateNom(id: number, value: string) {
    const query = "UPDATE utilisateur SET speudo = ? WHERE id = ?;;";

    const [rows] = await databaseClient.query(query, [value, id]);
    return rows;
  }

  //mettre a jour image de profile
  async updatePhotoProfil(
    id: number,
    results: {
      image: null | string;
    },
  ) {
    const query = "UPDATE utilisateur SET photo_profil = ? WHERE id = ?;;";

    const [rows] = await databaseClient.query(query, [results.image, id]);
    return rows;
  }

  //achet un abonement
  async buyAbonnement(id: number, dateFormatter: string) {
    const query =
      "UPDATE abonement SET actif = 1, date_fin = ? WHERE utilisateur_id = ?;";

    const [resultat] = await databaseClient.query(query, [dateFormatter, id]);

    return resultat;
  }
}

export default new UtilisateurRepository();
