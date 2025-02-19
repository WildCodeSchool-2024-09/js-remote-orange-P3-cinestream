const axios = require("axios");
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import type { Rows } from "../database/client";

dotenv.config();

// Charger directement le fichier JSON avec `require()`
const utilisateur = require("./admin.json");

const getToken = async (): Promise<string | null> => {
  // Récupérer les informations de connexion depuis les variables d'environnement
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  // Créer une connexion à la base de données
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: Number.parseInt(DB_PORT as string),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });

  try {
    // Exécuter la requête pour obtenir le token
    const [rows] = await connection.execute("SELECT token FROM token_serveur");

    // Vérifier si des tokens ont été trouvés
    if ((rows as []).length === 0) {
      console.warn("Aucun token trouvé dans la base de données.");
      return null;
    }

    // Extraire le token de la première ligne
    const serveurToken = (rows as Rows)[0].token;

    return serveurToken;
  } catch (error) {
    console.error("Erreur lors de la récupération du token:", error);
    return null;
  } finally {
    // Fermer la connexion
    await connection.end();
  }
};

const run = async (): Promise<void> => {
  try {
    const SERVEUR_URL = process.env.SERVEUR_URL || "";
    const serveurToken = await getToken();

    const values = {
      nom: utilisateur.nom,
      email: utilisateur.email,
      motDePasse: utilisateur.motDePasse,
      token: serveurToken,
    };

    // Envoyer les données au serveur
    const response = await axios.post(`${SERVEUR_URL}/api/newAdmin`, values, {
      headers: {
        Origin: `${SERVEUR_URL}`,
      },
    });

    // Vérifier la réponse du serveur
    if (response.status === 201) {
      console.info("✅ Admin créé avec succès !");
    } else {
      console.info("⚠️ ", response.data.message);
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("❌ Erreur :", err.message);
    } else {
      console.error("❌ Erreur inconnue :", err);
    }
  }
};

run();
