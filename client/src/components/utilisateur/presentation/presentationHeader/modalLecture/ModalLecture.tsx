import { IoMdClose } from "react-icons/io";
import definirUrlVideoIframe from "../../../../../hook/definirUrlVideoIframe";
import style from "./modalLecture.module.css";

interface ModalLectureProps {
  setModealLecture: (value: boolean) => void;
  video: string | null;
}

const ModalLecture = ({ setModealLecture, video }: ModalLectureProps) => {
  //taille de l'écran
  const defClass = () => {
    const ratio = 16 / 9;

    if (window.innerWidth / window.innerHeight > ratio) {
      return `${style.iframVideoY}`;
    }
    return `${style.iframVideoX}`;
  };

  return (
    <div className={`${style.modal}`}>
      <button
        className={`${style.bntFermerRecherche}`}
        onClick={() => setModealLecture(false)}
        type="button"
      >
        <IoMdClose className={`${style.iconCroix}`} />
      </button>
      <iframe
        className={defClass()}
        src={
          video
            ? definirUrlVideoIframe(video)
            : "https://fr.wikipedia.org/wiki/Erreur_HTTP_404"
        }
        title="retour video du lien"
      />
    </div>
  );
};

export default ModalLecture;
