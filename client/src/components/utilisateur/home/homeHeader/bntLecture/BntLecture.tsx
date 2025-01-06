import style from "./bntLecture.module.css";

const BntLecture = () => {
  return (
    <div>
      <button className={`${style.bntLecture}`} type="button">
        ▶️ Regarder les info
      </button>
    </div>
  );
};

export default BntLecture;
