import { useNavigate } from "react-router-dom";
import style from "./bntLecture.module.css";

const BntLecture = ({ id }: { id: number }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className={`${style.bntLecture}`}
        type="button"
        onClick={() => navigate(`/detail/${id}`)}
      >
        ▶️ Regarder les infos
      </button>
    </div>
  );
};

export default BntLecture;
