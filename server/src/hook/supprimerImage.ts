import fs from "node:fs";
import path from "node:path";

//fonction pour supprimer les fichiers
function deleteFilesInFolder(nomFicher: string, nom: string) {
  const racine = path.join(__dirname, `../../public/uploads/${nomFicher}`);
  // Vérifier que le dossier existe
  if (!fs.existsSync(racine)) {
    //si exite pas return null
    return;
  }
  // récupère tout les ficher du dossier
  const allFicher = fs.readdirSync(racine);

  // trouve les ficher qui on le nom a sup
  for (const ficher of allFicher) {
    // récupère le nom du ficher sans l'extension
    const ficherName = path.parse(ficher).name;

    // Si le nom correspond, supprimer le fichier
    if (ficherName === nom) {
      const chemainFicher = path.join(racine, ficher);
      // Supprimer le fichier
      fs.unlinkSync(chemainFicher);
    }
  }
}

export default deleteFilesInFolder;
