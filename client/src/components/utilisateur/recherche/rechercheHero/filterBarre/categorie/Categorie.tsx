import styles from './categorie.module.css';
import { FaChevronDown } from 'react-icons/fa'; 

const Categorie = () => {
    return (
        <div className={styles.categorie}>
            <span>Catégorie</span>
            <FaChevronDown className={styles.icon} />
           
        </div>
    );
};

export default Categorie;
