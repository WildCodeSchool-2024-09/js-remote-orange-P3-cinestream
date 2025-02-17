import { UseTokenContext } from "../../../../context/tokenContext";
import AllFilme from "./allFilme/AllFilme";
import AllSerie from "./allSerie/AllSerie";
import Categorie from "./categorie/Categorie";
import Favorie from "./favorie/Favorie";
import style from "./homeHero.module.css";
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
