import { useParams } from "react-router-dom";
import style from "./bntPartager.module.css";

const BntPartager = () => {
  const { idA } = useParams();

  const onclickPartager = async () => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/detail/${idA}`,
    );
    alert("Lien copié");
  };

  return (
    <button
      type="button"
      className={style.bntPartager}
      onClick={onclickPartager}
    >
      <div className={style.icon}>
        <svg viewBox="0 0 24 24">
          <title>Share Icon</title>
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.12-4.11c.53.5 1.23.81 2.01.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.91 9.81c-.53-.5-1.23-.81-2.01-.81-1.66 0-3 1.34-3 3s1.34 3 3 3c.78 0 1.48-.31 2.01-.81l7.12 4.11c-.05.23-.09.46-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />{" "}
        </svg>
      </div>
      Partager
    </button>
  );
};
export default BntPartager;
