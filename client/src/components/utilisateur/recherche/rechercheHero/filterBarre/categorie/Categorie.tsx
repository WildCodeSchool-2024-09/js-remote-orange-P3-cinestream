import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./categorie.module.css";

interface Categorie {
  id: string;
  nom: string;
  image: string | null;
}

interface CategorieProps {
  categorie: string;
  setCategorie: (categorie: string) => void;
}

const Categorie = ({ categorie, setCategorie }: CategorieProps) => {
  const [allCategorie, setAllCategorie] = useState<Categorie[]>([]);

  useEffect(() => {
    const getAllCategorie = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/categorie/getAll`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (data.sucssces) {
          setAllCategorie(data.categorie);
        }
      } catch (error) {
        console.error("eurreur l'ore de la récupération des catégories");
      }
    };
    getAllCategorie();
  }, []);

  return (
    <div className={`${styles.contenerCategorie}`}>
      <select
        className={`${styles.categorieInput}`}
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
      >
        <option value="all">tous</option>
        {allCategorie.map((categorie) => (
          <option key={categorie.id} value={categorie.nom}>
            {categorie.nom}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categorie;
