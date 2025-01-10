import styles from './type.module.css';
import { FaChevronDown } from 'react-icons/fa'; 

const Type = () => {
    return (
        <div className={styles.type}>
            <span>Type</span>
            <FaChevronDown className={styles.icon} />
            
        </div>
    );
};

export default Type;
