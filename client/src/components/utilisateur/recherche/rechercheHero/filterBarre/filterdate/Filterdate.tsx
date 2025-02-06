import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from "./filterdate.module.css";

interface FilterDateProps {
  setDate: (date: string) => void;
}

const FilterDate = ({ setDate }: FilterDateProps) => {
  const [dateRender, setDateRender] = useState("");

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;

    if (newDate.length === 4) {
      setDate(String(newDate));
    } else {
      setDate("");
    }
  };

  const defClassInput = () => {
    if (dateRender.length === 4 || dateRender === "") {
      return `${styles.filterDate}`;
    }
    return `${styles.filterDate} ${styles.dateRenderIncorrect}`;
  };

  return (
    <div className={styles.contenerInputDate}>
      <input
        type="number"
        className={defClassInput()}
        value={dateRender}
        onChange={(e) => setDateRender(e.target.value)}
        onBlur={handleBlur}
        placeholder="Année"
      />
      <div className={`${styles.contenercalendrillier}`}>
        <FaRegCalendarAlt className={`${styles.calendrillier}`} />
      </div>
    </div>
  );
};

export default FilterDate;
