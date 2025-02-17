import fs from "node:fs";
import path from "node:path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import type { ErrorRequestHandler } from "express";
import originResquet from "./modules/originResquet/originResquet";
import router from "./router";

dotenv.config();

const app = express();

app.use(express.json());

const corsOrigin = [];

process.env.CLIENT_URL && corsOrigin.push(process.env.CLIENT_URL);
process.env.CLIENT_URL2 && corsOrigin.push(process.env.CLIENT_URL2);
process.env.SERVEUR_URL && corsOrigin.push(process.env.SERVEUR_URL);
process.env.CLIENT_URL_NETWORK &&
  corsOrigin.push(process.env.CLIENT_URL_NETWORK);

if (corsOrigin.length > 0) {
  app.use(
    cors({
      origin: corsOrigin,
    }),
  );
} else {
  console.error("Démarrage refusé: variables d'environnement cors manquantes");
  process.exit(1);
}

//génère un token pour le serveur
originResquet.setTokenServeur();

//route pour image public dynamique
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));
app.use("/api/image", express.static(path.join(__dirname, "../public/images")));

// Mount the API router under the "/api" endpoint
app.use(router);

// Serve server resources

const publicFolderPath = path.join(__dirname, "../../server/public");

if (fs.existsSync(publicFolderPath)) {
  app.use(express.static(publicFolderPath));
}

// Serve client resources

const clientBuildPath = path.join(__dirname, "../../client/dist");

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  // Redirect unhandled requests to the client index file

  app.get("*", (_, res) => {
    res.sendFile("index.html", { root: clientBuildPath });
  });
}

// Middleware for Error Logging
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.
// Define a middleware function to log errors
const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);
  next(err);
};

//logErrors middleware globale
app.use(logErrors);

export default app;
