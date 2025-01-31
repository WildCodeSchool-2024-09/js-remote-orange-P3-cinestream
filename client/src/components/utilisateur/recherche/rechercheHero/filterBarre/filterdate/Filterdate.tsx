import { useState } from "react";
import styles from "./filterdate.module.css";

interface FilterDateProps {
  setDate: (date: string) => void;
}

const FilterDate = ({ setDate }: FilterDateProps) => {
  const [dateRender, setDateRender] = useState("");

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;

    if (newDate && !Number.isNaN(new Date(newDate).getTime())) {
      setDate(newDate);
    } else {
      setDate("");
    }
  };

  return (
    <div className={styles.contenerInputDate}>
      <input
        type="date"
        className={styles.filterDate}
        value={dateRender}
        onChange={(e) => setDateRender(e.target.value)}
        onBlur={handleBlur}
      />
      <div className={`${styles.fondCalendillier}`} />
    </div>
  );
};

export default FilterDate;
