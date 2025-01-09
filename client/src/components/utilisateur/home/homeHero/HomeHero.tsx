import AllFilme from "./allFilme/AllFilme";
import AllSerie from "./allSerie/AllSerie";
import Categorie from "./categorie/Categorie";
import Favorie from "./favorie/Favorie";
import Recent from "./recent/Recent";
import Source from "./source/Source";
import TopNotes from "./topNotes/TopNotes";

const HomeHero = () => {
  return (
    <>
      <Source />
      <Recent />
      <TopNotes />
      <Categorie />
      <AllFilme />
      <AllSerie />
      <Favorie />
    </>
  );
};

export default HomeHero;
