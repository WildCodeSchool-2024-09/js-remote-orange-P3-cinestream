import styles from './recherche.module.css';
import { FaSearch } from 'react-icons/fa';

const Recherche = () => {
    return (
        <div className={styles.recherche}>
            <input type="text" placeholder="Rechercher" />
            <FaSearch className={styles.icon} />
        </div>
    );
};

export default Recherche;
