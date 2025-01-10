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
    await databaseClient.query(query, [
      email,
      motDePasseCrypte,
      nom,
      dateFormatter,
    ]);
  }

  //crée un utilisateur admin
  async createAdmin({
    nom,
    email,
    motDePasseCrypte,
    dateFormatter,
  }: CreateUserParams) {
    const query = `
            INSERT INTO utilisateur (mail, password, speudo, date_inscription, is_admin)
            VALUES(?, ?, ?, ?, 1)
        `;
    await databaseClient.query(query, [
      email,
      motDePasseCrypte,
      nom,
      dateFormatter,
    ]);
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
    return rows;
  }
}

export default new UtilisateurRepository();
