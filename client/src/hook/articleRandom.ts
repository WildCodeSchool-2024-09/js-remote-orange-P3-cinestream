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
function randomSeed(seed1: number): () => number {
  let seed = seed1;
  return () => {
    seed += 0x6d2b79f5;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
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
