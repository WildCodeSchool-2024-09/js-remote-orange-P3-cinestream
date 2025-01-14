import { UseTokenContext } from "../../../../context/tokenContext";
import style from "./HomeHero.module.css";
import AllFilme from "./allFilme/AllFilme";
import AllSerie from "./allSerie/AllSerie";
import Categorie from "./categorie/Categorie";
import Favorie from "./favorie/Favorie";
import Recent from "./recent/Recent";
import Source from "./source/Source";
import TopNotes from "./topNotes/TopNotes";

const HomeHero = () => {
  const { token } = UseTokenContext();

  return (
    <>
      <Source />
      <Recent />
      <TopNotes />
      <Categorie />
      <AllFilme />
      <AllSerie />
      {token && <Favorie />}
      <div className={`${style.espaceBottom}`} />
    </>
  );
};

export default HomeHero;
