import styles from './filterdate.module.css';
import { FaChevronDown } from 'react-icons/fa';
const FilterDate = () => {
    return (
        <div className={styles.filterDate}>
            <span>Date</span>
            <FaChevronDown className={styles.icon} />
           
        </div>
    );
};

export default FilterDate;
