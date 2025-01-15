import styles from "./filmComposent.module.css";

const FilmComposent = () => {
  // Exemple de données de films
  const films = [
    {
      id: 1,
      title: "Sonic The Hedgehog 2",
      image: "/temporaire/afficheSonic.jpg",
      description: "Un hérisson bleu rapide et ses aventures.",
      type: "film",
    },
    {
      id: 2,
      title: "Star Wars The Force Awakens",
      image: "/temporaire/afficheStarWars.jpg",
      description: "La saga continue avec de nouveaux héros.",
      type: "film",
    },
    {
      id: 3,
      title: "Squid Game",
      image: "/temporaire/afficheSuideGame.jpg",
      description: "Un jeu mortel avec des enjeux élevés.",
      type: "série",
    },
    {
      id: 4,
      title: "Terminator Genisys",
      image: "/temporaire/afficheTerminator.jpg",
      description: "Un cyborg du futur en mission périlleuse.",
      type: "film",
    },
    {
      id: 5,
      title: "007 Spectre",
      image: "/temporaire/afficheSpectre.jpg",
      description: "James Bond contre une organisation secrète.",
      type: "film",
    },
    {
      id: 6,
      title: "Jumanji",
      image: "/temporaire/jumanji.jpg",
      description: "Un jeu de société magique et dangereux.",
      type: "film",
    },
    {
      id: 7,
      title: "Aquaman Lost Kingdom",
      image: "/temporaire/afficheAquoiman.jpg",
      description: "Le roi des mers et ses aventures.",
      type: "film",
    },
    {
      id: 8,
      title: "Deadpool",
      image: "/temporaire/afficheDedpool.jpg",
      description: "Un anti-héros avec un sens de l'humour unique.",
      type: "film",
    },
    {
      id: 9,
      title: "Harry Potter",
      image: "/temporaire/afficheHarryPotter.jpg",
      description: "Le jeune sorcier et ses aventures à Poudlard.",
      type: "film",
    },
    {
      id: 10,
      title: "Matrix Resurrections",
      image: "/temporaire/afficheMatris.jpg",
      description: "Un monde virtuel et la lutte pour la liberté.",
      type: "film",
    },
    {
      id: 11,
      title: "Pokemon Detective Pikachu",
      image: "/temporaire/affichePokemon.jpg",
      description: "Attrapez-les tous dans ce monde de créatures.",
      type: "film",
    },
    {
      id: 12,
      title: "Jhonny English",
      image: "/temporaire/JhonnyEnglish.jpg",
      description: "Un espion maladroit mais déterminé.",
      type: "film",
    },
    {
      id: 13,
      title: "Hitman & Bodyguard 2",
      image: "/temporaire/HitmanBodyguard2.jpg",
      description: "Un duo improbable dans des missions dangereuses.",
      type: "film",
    },
    {
      id: 14,
      title: "Jungle Cruise",
      image: "/temporaire/JungleCruise.jpg",
      description: "Une aventure en bateau dans la jungle.",
      type: "film",
    },
    {
      id: 15,
      title: "The Flash Armageddon",
      image: "/temporaire/Flash.jpg",
      description: "Le super-héros le plus rapide du monde.",
      type: "série",
    },
    // Ajoutez plus de films ici
  ];

  return (
    <div className={styles.filmComposent}>
      {films.map((film) => (
        <div key={film.id} className={styles.filmCard}>
          <img src={film.image} alt={film.title} />
          <div className={styles.title}>{film.title}</div>
          <div className={styles.description}>{film.description}</div>
          <div className={styles.type}>{film.type}</div>
        </div>
      ))}
    </div>
  );
};

export default FilmComposent;
