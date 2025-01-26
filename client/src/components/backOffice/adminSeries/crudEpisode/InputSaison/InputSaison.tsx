import style from "./InputSaison.module.css";

interface Episode {
  episode_description: string | null;
  episode_id: number;
  episode_image: string | null;
  episode_lien_video: string | null;
  episode_nom: string;
  episode_numero: number;
}

interface Saison {
  saison_id: number;
  saison_numero: number;
  episodes: Episode[];
}

interface InputSaisonProps {
  allEpisode: Saison[];
  saisonSelect: number;
  setSaisonSelect: (value: number) => void;
}

const InputSaison = ({
  allEpisode,
  saisonSelect,
  setSaisonSelect,
}: InputSaisonProps) => {
  return (
    <select
      className={`${style.InputSaison}`}
      value={saisonSelect}
      onChange={(e) => setSaisonSelect(Number(e.target.value))}
    >
      {allEpisode.map((saison) => (
        <option key={saison.saison_id} value={saison.saison_numero}>
          Saison {saison.saison_numero}
        </option>
      ))}
      <option value="-1">Ajouter</option>
    </select>
  );
};

export default InputSaison;
