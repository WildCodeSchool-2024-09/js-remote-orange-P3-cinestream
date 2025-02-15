import Footer from "../../../components/commun/footer/Footer";
import HomeHeader from "../../../components/utilisateur/home/homeHeader/HomeHeader";
import HomeHero from "../../../components/utilisateur/home/homeHero/HomeHero";
import style from "./home.module.css";

const Home = () => {
  return (
    <div className={`${style.homePage}`}>
      <HomeHeader />
      <HomeHero />
      <Footer />
    </div>
  );
};

export default Home;
