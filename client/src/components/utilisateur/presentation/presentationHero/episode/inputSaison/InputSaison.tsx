import type Slider from "react-slick";
import type { Saison } from "../../../../../../types/vite-env";
import style from "./inputSaison.module.css";

interface InputSaisonProps {
  allEpisodes: Saison[];
  setEpisodeSelect: (episode: number) => void;
  saisonSelect: number;
  setSaisonSelect: (saison: number) => void;
  sliderRef: React.RefObject<Slider>;
}

const InputSaison = ({
  allEpisodes,
  setEpisodeSelect,
  saisonSelect,
  setSaisonSelect,
  sliderRef,
}: InputSaisonProps) => {
  return (
    <>
      {/* le select */}
      {allEpisodes.length > 0 && (
        <select
          className={`${style.dropdownMenu}`}
          value={saisonSelect}
          onChange={(e) => {
            setSaisonSelect(Number.parseInt(e.target.value));
            setEpisodeSelect(1);
            //remettre le slider a la premiere slide
            if (sliderRef.current) {
              sliderRef.current.slickGoTo(0);
            }
          }}
        >
          {allEpisodes.map((saison) => (
            <option key={saison.saison_id} value={saison.saison_numero}>
              Saison {saison.saison_numero}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default InputSaison;
