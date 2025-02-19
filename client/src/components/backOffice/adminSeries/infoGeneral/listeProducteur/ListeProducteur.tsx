import axios from "axios";
import { useEffect, useState } from "react";
import ModalListeCommun from "../communInfoGeneral/modalListeCommun/ModalListeCommun";
import style from "./listeProducteur.module.css";

interface Platforme {
  id: number;
  nom: string;
  image: string;
}

interface ListePlatformeProps {
  platforme: Platforme[];
  setPlatforme: (
    platforme: { id: number; nom: string; image: string }[],
  ) => void;
}

const ListeProducteur = ({ platforme, setPlatforme }: ListePlatformeProps) => {
  const [modal, setModal] = useState(false);
  const [listePlatforme, setListePlatforme] = useState([] as Platforme[]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/platforme/getAll`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setListePlatforme(data.platforme);
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
          listeElement={listePlatforme}
          elementSelect={platforme}
          setElementSelect={setPlatforme}
          setModal={setModal}
        />
      )}
      <div className={`${style.flexContainer}`}>
        <p className={`${style.pTitreInput}`}>Producteur</p>

        <div
          className={`${style.divContour}`}
          onClick={() => setModal(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setModal(true);
            }
          }}
        >
          {listePlatforme.map((element) => {
            if (platforme.some((el: Platforme) => el.id === element.id)) {
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

export default ListeProducteur;
