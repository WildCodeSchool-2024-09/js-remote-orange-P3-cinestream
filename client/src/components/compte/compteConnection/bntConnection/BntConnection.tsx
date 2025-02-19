import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import style from "./bntConnection.module.css";

interface BntConnectionProps {
  valide: {
    email: boolean;
    motDePasse: boolean;
  };
  messageErreur: string;
  setMessageErreur: (value: React.SetStateAction<string>) => void;
  email: string;
  motDePasse: string;
}

const BntConnection: React.FC<BntConnectionProps> = ({
  valide,
  messageErreur,
  setMessageErreur,
  email,
  motDePasse,
}) => {
  //pour changer de routes
  const navigate = useNavigate();

  //utiliser le contexte
  const { setToken } = UseTokenContext();

  //change la classe en fonction de si tout est bon
  function defClass() {
    if (valide.email && valide.motDePasse) {
      return `${style.bntConnection} ${style.bntContinueValide}`;
    }
    return `${style.bntConnection}`;
  }

  const handleConection = async () => {
    const values = {
      email: email,
      motDePasse: motDePasse,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/connection`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setMessageErreur(data.message);
      if (data.token) {
        //navigation
        setToken(data.token);
        navigate("/");
      }
    } catch (error) {
      setMessageErreur("Erreur lors de la connection");
    }
  };
  return (
    <>
      {messageErreur && (
        <p className={`${style.messageErreur}`}>{messageErreur}</p>
      )}
      <button
        className={defClass()}
        type="button"
        onClick={() => {
          handleConection();
        }}
      >
        continue
      </button>
    </>
  );
};

export default BntConnection;
