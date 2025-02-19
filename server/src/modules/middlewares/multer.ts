import fs from "node:fs";
import path from "node:path";
import multer, { type StorageEngine } from "multer";

const uploadDynamicImages = (
  formFieldNames: string[], // Tableau des noms de champs dans formData
  folderDestinationFn: (fieldName: string) => string, // Fonction dynamique pour déterminer le dossier de destination
  fileNameBuilder: (req: Express.Request, file: Express.Multer.File) => string, // Fonction dynamique pour nommer le fichier
) => {
  const storage: StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      const folderDestination = folderDestinationFn(file.fieldname); // Détermine le dossier basé sur le champ
      const uploadPath = path.join(
        __dirname,
        `../../../public/uploads/${folderDestination}`,
      );

      // Vérifie si le dossier existe, sinon le crée
      fs.mkdir(uploadPath, { recursive: true }, (err) => {
        if (err) {
          return cb(err, ""); // Si une erreur survient pendant la création du dossier
        }
        cb(null, uploadPath); // Dossier prêt, continue l'upload
      });
    },
    filename: (req, file, cb) => {
      // Génération du nom du fichier via la fonction passée en paramètre
      const fileName = fileNameBuilder(req, file);
      cb(null, fileName + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limite de 10 Mo
  });

  // Acceptation de plusieurs champs de fichiers
  return upload.fields(
    formFieldNames.map((fieldName) => ({ name: fieldName, maxCount: 1 })),
  );
};

export default uploadDynamicImages;
