import style from "./point.module.css";

const Point = () => {
  const nbPoint = [1, 2, 3, 4, 5];

  function defSelevtioner(point: number) {
    if (point === 1) {
      return `${style.point} ${style.pointSelectionner}`;
    }
    return `${style.point}`;
  }

  return (
    <div className={`${style.contenerPoint}`}>
      {nbPoint.map((point, index) => (
        <div className={defSelevtioner(point)} key={`${index} ${point}`} />
      ))}
    </div>
  );
};

export default Point;
