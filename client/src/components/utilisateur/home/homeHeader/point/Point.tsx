import style from "./point.module.css";
interface ArticleSlider {
  id: number;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_numero: null | number;
  univers_id: null | number;
  categorie: string[];
  moyenne_note: number;
  description: string | null;
  isFavorie: number;
}

interface PointProps {
  indexSelect: number;
  changerImage: (index: number) => void;
  film5: ArticleSlider[];
}

const Point = ({ indexSelect, changerImage, film5 }: PointProps) => {
  function defSelevtioner(point: number) {
    if (point === indexSelect) {
      return `${style.point} ${style.pointSelectionner}`;
    }
    return `${style.point}`;
  }

  function onClickPoint(point: number) {
    changerImage(point);
  }

  return (
    <div className={`${style.contenerPoint}`}>
      {film5.map((point, index) => (
        <div
          className={defSelevtioner(index)}
          key={`${index} ${point.id}`}
          onClick={() => onClickPoint(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClickPoint(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default Point;
