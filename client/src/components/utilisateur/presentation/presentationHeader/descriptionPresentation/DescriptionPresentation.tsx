import style from './descriptionPresentation.module.css';

interface DescriptionPresentationProps {
  type: string;
  title: string;
  season: string;
  description: string;
}

const DescriptionPresentation: React.FC<DescriptionPresentationProps> = ({ type, title, season, description }) => {
  return (
    <div>
      <div className={style.rectangle}>
        <p>{type}</p>
      </div>
      <div className={style.titre}>
        <p>{title}</p>
      </div>
      <div className={style.saison}>
        <p>{season}</p>
      </div>
      <div className={style.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionPresentation;
