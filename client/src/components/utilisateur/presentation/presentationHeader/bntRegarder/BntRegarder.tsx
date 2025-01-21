import style from "./bntRegarder.module.css";

const BntRegarder = () => {
  return (
    <button className={style.bntRegarder} type="button">
      <div className={style.icon}>
        <svg viewBox="0 0 24 24">
          <title>Play Icon</title>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      Regarder
    </button>
  );
};

export default BntRegarder;
