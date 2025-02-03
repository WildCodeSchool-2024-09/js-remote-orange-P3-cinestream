// Fonction pour générer une seed basée sur la date (jour, mois, année, heure)
function generateSeedFromDate(date: Date): number {
  const seed = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    0,
    0,
    0,
  );
  return seed;
}

// Fonction pour générer un nombre aléatoire avec une seed (basée sur le générateur de Mersenne Twister ou similaire)
function randomSeed(seed: number): () => number {
  const x = Math.sin(seed) * 10000; // Une méthode simple pour générer des nombres pseudo-aléatoires
  return () => x - Math.floor(x);
}

// Fonction pour mélanger un tableau en utilisant une seed
function articleAleatoir<T>(array: T[], seedUnique: number): T[] {
  const seed = generateSeedFromDate(new Date());
  const random = randomSeed(seed + seedUnique);
  const newArray = [...array]; // Créer une copie du tableau pour ne pas modifier l'original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1)); // Générer un indice aléatoire
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Échanger les éléments
  }
  return newArray;
}

export default articleAleatoir;
