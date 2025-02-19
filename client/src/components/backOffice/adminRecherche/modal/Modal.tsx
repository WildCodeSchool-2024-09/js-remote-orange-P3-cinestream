import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import BntFermerModal from "./bntFermerModal/BntFermerModal";
import style from "./modal.module.css";

interface BntFermerModalProps {
  setIsModal: (value: boolean) => void;
}

const Modal = ({ setIsModal }: BntFermerModalProps) => {
  const navigate = useNavigate();
  const { token } = UseTokenContext();

  const handleClick = async (type: string) => {
    const values = {
      type: type,
      token: token,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/serie/new`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        navigate(`/admin/organisation/${data.id}`);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className={`${style.cacheFond}`}>
      <div className={`${style.contenerModal}`}>
        <BntFermerModal setIsModal={setIsModal} />
        <div className={`${style.flexBntFilm}`}>
          <button
            className={`${style.bntFilm}`}
            onClick={() => handleClick("film")}
            type="button"
          >
            Film
          </button>
          <button
            className={`${style.bntFilm}`}
            onClick={() => handleClick("serie")}
            type="button"
          >
            Serie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
