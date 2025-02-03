import style from "./desciptionAnonce.module.css";

interface ArticleSlider {
  id: number;
  nom: string;
  date: string | null;
  image: string | null;
  image_rectangle: string | null;
  publier: number;
  premium: number;
  type: string;
  univers_numero: null | number;
  univers_id: null | number;
  categorie: string[];
  moyenne_note: number;
  description: string | null;
  isFavorie: number;
}

interface DesciptionAnonceProps {
  filmSelect: ArticleSlider;
}

const definirNotes = (note: number) => {
  if (note === 0) return "⭐0";
  return `⭐${Number(note.toFixed(1))}`;
};

const definirCategorie = (categorie: string[]) => {
  if (categorie.length === 0) return "";
  let categorieString = "";

  for (const element of categorie) {
    categorieString += `• ${element} `;
  }
  // Retire le dernier caractère
  return `${categorieString.slice(0, -1)}`;
};

const traduireDate = (date: string) => {
  return new Date(date).getFullYear();
};

const DesciptionAnonce = ({ filmSelect }: DesciptionAnonceProps) => {
  return (
    <div className={`${style.desciptionAnonce}`}>
      {/* type de filme */}
      <p className={`${style.headerType}`}>{filmSelect.type}</p>
      {/* titre du filme */}
      <p className={`${style.headerTitre}`}>{filmSelect.nom}</p>
      {/* info filme */}
      <p className={`${style.headerInfoFilme}`}>
        {`${definirNotes(Number(filmSelect.moyenne_note))}`}{" "}
        {filmSelect.date && `• ${traduireDate(String(filmSelect.date))}`}{" "}
        {definirCategorie(filmSelect.categorie)}
      </p>
      {/* desciption */}
      <p className={`${style.headerDescription}`}>
        {filmSelect.description ? filmSelect.description : ""}
      </p>
    </div>
  );
};

export default DesciptionAnonce;
