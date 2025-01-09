import styles from './filmComposent.module.css';

const FilmComposent = () => {
    // Exemple de données de films
    const films = [
        { id: 1, title: 'Film 1', image: '/temporaire/afficheSonic.jpg' },
        { id: 2, title: 'Film 2', image: '/temporaire/afficheStarWars.jpg' },
        { id: 3, title: 'Film 3', image: '/temporaire/afficheSuideGame.jpg' },
        { id: 4, title: 'Film 4', image: '/temporaire/afficheTerminator.jpg' },
        { id: 5, title: 'Film 5', image: '/temporaire/afficheSpectre.jpg' },
        // Ajoutez plus de films ici
    ];

    return (
        <div className={styles.filmComposent}>
            {films.map(film => (
                <div key={film.id} className={styles.filmCard}>
                    <img src={film.image} alt={film.title} />
                    <div className={styles.title}>{film.title}</div>
                </div>
            ))}
        </div>
    );
};

export default FilmComposent;
