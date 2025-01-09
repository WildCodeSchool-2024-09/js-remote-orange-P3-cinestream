import { E } from "@faker-js/faker/dist/airline-C5Qwd7_q";

const axios = require("axios");
const dotenv = require("dotenv");

// Charger directement le fichier JSON avec `require()`
const utilisateur = require("./admin.json");

const run = async (): Promise<void> => {
  dotenv.config();

  try {
    const SERVEUR_URL = process.env.SERVEUR_URL || "";

    const values = {
      nom: utilisateur.nom,
      email: utilisateur.email,
      motDePasse: utilisateur.motDePasse,
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
