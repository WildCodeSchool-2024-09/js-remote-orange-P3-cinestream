import style from "./checkboxModal.module.css";

interface ElementType {
  id: number;
  nom: string;
  image: string;
}

interface CheckboxModalProps {
  index: number;
  element: ElementType;
  elementSelect: ElementType[];
  setElementSelect: (
    categorie: { id: number; nom: string; image: string }[],
  ) => void;
}

const CheckboxModal = ({
  index,
  element,
  elementSelect,
  setElementSelect,
}: CheckboxModalProps) => {
  return (
    <div className={`${style.contenerInput}`}>
      <input
        className={`${style.InputCheck}`}
        type="checkbox"
        id={`commun${index}`}
        //met la case en true ou false en fonction de si element est dans la liset des element selectioner
        checked={!!elementSelect.find((el) => el.id === element.id)}
        onChange={() => {
          if (elementSelect.some((el) => el.id === element.id)) {
            // Si l'élément est déjà sélectionné, on le retire
            const newSelectElement = elementSelect.filter(
              (el) => el.id !== element.id,
            );
            //appliquer le changement
            setElementSelect(newSelectElement);
          } else {
            // Sinon, on l'ajoute
            setElementSelect([...elementSelect, element]);
          }
        }}
      />
      <label className={`${style.pTitreInputCheck}`} htmlFor={`commun${index}`}>
        {element.nom}
      </label>
    </div>
  );
};

export default CheckboxModal;
