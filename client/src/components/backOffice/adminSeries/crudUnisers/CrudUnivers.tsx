import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import BntAjouterSerie from "./bntAjouterSerie/BntAjouterSerie";
import style from "./crudUnivers.module.css";
import ElementCurd from "./elementCurd/ElementCurd";

interface CrudUniversProps {
  updateInfoGeneral: () => Promise<boolean>;
}

interface Article {
  date: null | string;
  id: number;
  image: null | string;
  image_rectangle: null | string;
  nom: string;
  premium: number;
  publier: number;
  type: string;
  univers_id: number;
  univers_numero: number;
  description: string;
}

const CrudUnivers = ({ updateInfoGeneral }: CrudUniversProps) => {
  const { id } = useParams();
  const { token } = UseTokenContext();
  const [univers, setUnivers] = useState<Article[]>([]);
  const [dansUnivers, setDansUnivers] = useState(false);

  //function qui récupère toutes les informations de la série
  const getAllUnivers = async () => {
    const values = {
      token: token,
      idA: id,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/backoffice/article/crudUnivers/get`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.sucssces) {
        if (data.isUnivers) {
          //set les univers si il en a
          setUnivers(data.articles);
        }
        //set Etat si il est dans un univers
        setDansUnivers(data.isUnivers);
      }
    } catch (error) {}
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getAllUnivers();
  }, []);

  return (
    <div id="crudUnivers" className={`${style.contenerSection}`}>
      <p className={`${style.titreSection}`}>Univers</p>
      <div className={`${style.flexAllElement}`}>
        {dansUnivers &&
          univers.map((article) => (
            <ElementCurd
              key={article.id}
              article={article}
              updateAllUnivers={getAllUnivers}
              updateInfoGeneral={updateInfoGeneral}
            />
          ))}
        <BntAjouterSerie updateInfoGeneral={updateInfoGeneral} />
      </div>
    </div>
  );
};

export default CrudUnivers;
