import Episode from "./episode/Episode";
import Notation from "./notation/Notation";
import Univers from "./univers/Univers";

const PresentationHero = () => {
  return (
    <>
      <Episode />
      <Univers />
      <Notation />
    </>
  );
};

export default PresentationHero;
