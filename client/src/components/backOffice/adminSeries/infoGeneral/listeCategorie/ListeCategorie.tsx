import axios from "axios";
import { useEffect, useState } from "react";
import ModalListeCommun from "../communInfoGeneral/modalListeCommun/ModalListeCommun";
import style from "./listeCategorie.module.css";

interface Categorie {
  id: number;
  nom: string;
  image: string;
}

interface ListeCategorieProps {
  categorie: Categorie[];
  setCategorie: (
    categorie: { id: number; nom: string; image: string }[],
  ) => void;
}

const ListeCategorie = ({ categorie, setCategorie }: ListeCategorieProps) => {
  const [modal, setModal] = useState(false);
  const [listeCategories, setListeCategories] = useState([] as Categorie[]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/categorie/getAll`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setListeCategories(data.categorie);
      } catch (error) {
        console.error("eurreur l'ore de la récupération des catégories");
      }
    };

    getAllCategories();
  }, []);

  return (
    <>
      {modal && (
        <ModalListeCommun
          listeElement={listeCategories}
          elementSelect={categorie}
          setElementSelect={setCategorie}
          setModal={setModal}
        />
      )}
      <div className={`${style.flexContainer}`}>
        <p className={`${style.pTitreInput}`}>Categorie</p>

        <div
          className={`${style.divContour}`}
          onClick={() => setModal(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setModal(true);
            }
          }}
        >
          {listeCategories.map((element) => {
            if (categorie.some((el: Categorie) => el.id === element.id)) {
              return (
                <p key={element.id} className={`${style.pElement}`}>
                  {element.nom}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default ListeCategorie;
