import style from "./bntLecture.module.css";

const BntLecture = () => {
  return (
    <div>
      <button className={`${style.bntLecture}`} type="button">
        ▶️ Regarder les infos
      </button>
    </div>
  );
};

export default BntLecture;
