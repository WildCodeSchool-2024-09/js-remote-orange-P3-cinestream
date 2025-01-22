import AllCommentaireComposent from "./allCommentaireComposent/AllCommentaireComposent";
import BntPlus from "./bntPlus/BntPlus";

const AllCommentaire = () => {
  return (
    <div>
      <div>
        <AllCommentaireComposent />
        <AllCommentaireComposent />
        <AllCommentaireComposent />
        <AllCommentaireComposent />
      </div>
      <BntPlus />
    </div>
  );
};

export default AllCommentaire;
