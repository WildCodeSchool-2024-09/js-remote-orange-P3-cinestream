import axios from "axios";
import { useEffect, useState } from "react";
import { UseTokenContext } from "../../../../context/tokenContext";
import FilmComposent from "./filmComposent/FilmComposent";
import style from "./listeSeries.module.css";

interface Serie {
  id: number;
  image: string | null;
  nom: string;
  publier: boolean;
  premium: boolean;
  type: string;
}

const ListeSeries = ({ recherche }: { recherche: string }) => {
  const [series, setSeries] = useState([]);
  const { token } = UseTokenContext();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const chercherSerie = async () => {
      const values = {
        token: token,
        recherche: recherche,
      };

      try {
        const { data } = await axios.post(
          "http://localhost:3310/api/backoffice/serie/getAll",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.sucssces) {
          setSeries(data.series);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des séries");
      }
    };
    chercherSerie();
  }, [recherche]);

  return (
    <div className={`${style.contenerAllSerie}`}>
      {series.map((serie: Serie) => {
        return <FilmComposent key={serie.id} data={serie} />;
      })}
    </div>
  );
};

export default ListeSeries;
