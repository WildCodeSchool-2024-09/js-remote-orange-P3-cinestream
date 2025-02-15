import axios from "axios";
import { UseTokenContext } from "../../../../../context/tokenContext";
import style from "./bntUpgrade.module.css";

interface OffreAbonementProps {
  abonement: boolean;
  setAbonement: (value: boolean) => void;
  dateAbonement: string;
  setDateAbonement: (value: string) => void;
}

const BntUpgrade = ({
  abonement,
  setAbonement,
  dateAbonement,
  setDateAbonement,
}: OffreAbonementProps) => {
  const { token } = UseTokenContext();

  const buyAbonnement = async () => {
    const values = {
      token: token,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/compte/profile/buyAbonement`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.success) {
        setAbonement(true);
        setDateAbonement(data.newDate);
      }
    } catch (error) {
      console.error(
        "eurror l'ore de la récupération des info de l'utilisateur",
        error,
      );
    }
  };

  function handleClick() {
    buyAbonnement();
  }

  function defTexteTitre() {
    if (!abonement) {
      return "Passer au premium ?";
    }

    const date = new Date(dateAbonement);
    const formattedDate = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return `fin : ${formattedDate}`;
  }

  return (
    <>
      <div className={`${style.contenerbntUpgrade}`}>
        <p className={`${style.pTexteUpgrade}`}>{defTexteTitre()}</p>
        {!abonement && (
          <button
            className={`${style.BntUpgrade}`}
            type="button"
            onClick={handleClick}
          >
            👑 Upgrade
          </button>
        )}
      </div>
    </>
  );
};

export default BntUpgrade;
