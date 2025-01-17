import Footer from "../../../components/commun/footer/Footer";
import PresentationHeader from "../../../components/utilisateur/presentation/presentationHeader/PresentationHeader";
import PresentationHero from "../../../components/utilisateur/presentation/presentationHero/PresentationHero";
import style from "./presentation.module.css";

const Presentation = () => {
  return (
    <div className={`${style.presentationPage}`}>
      <PresentationHeader />
      <PresentationHero />
      <Footer />
    </div>
  );
};

export default Presentation;
