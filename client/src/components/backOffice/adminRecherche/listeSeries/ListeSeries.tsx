import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const paramsUniversIdA = searchParams.get("universIdA");

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const chercherSerie = async () => {
      const values = {
        token: token,
        recherche: recherche,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/backoffice/serie/getAll`,
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
  }, []);

  const filtreRecherche = (serie: Serie) => {
    //reture true si commence par !
    const isNotPublier = recherche.charAt(0) === "!";
    //cré une variable recherche
    let rechercheClaire = recherche;
    //si ca commence par ! on le suprime
    if (isNotPublier) {
      rechercheClaire = recherche.slice(1);
    }

    //si il doit affciher que les non puiblier
    if (isNotPublier && Boolean(serie.publier)) {
      return false;
    }

    //filtre de nom
    if (
      serie.nom
        .toLocaleLowerCase()
        .includes(rechercheClaire.toLocaleLowerCase())
    ) {
      return true;
    }
    return false;
  };

  const filmFiltrer = series.filter((serie: Serie) => filtreRecherche(serie));

  return (
    <div className={`${style.contenerAllSerie}`}>
      {filmFiltrer.length > 0 ? (
        filmFiltrer.map((serie: Serie) => {
          return (
            // verrifie que en mdode addUnivers qu'il sauto affcihe pas lui meme
            serie.id !== Number(paramsUniversIdA) ? (
              <FilmComposent key={serie.id} data={serie} />
            ) : null
          );
        })
      ) : (
        <p className={`${style.pAucunResultat}`}>Aucun résultat</p>
      )}
    </div>
  );
};

export default ListeSeries;
