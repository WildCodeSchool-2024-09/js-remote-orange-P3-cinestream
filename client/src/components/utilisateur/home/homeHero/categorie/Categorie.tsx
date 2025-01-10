import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import style from "./Categorie.module.css";

const Categorie = () => {
  const settings = {
    dots: false, // Désactive les points de navigation
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipe: true, // Active le défilement avec la souris ou le doigt
    swipeToSlide: true, // Permet de scroller vers n'importe quelle position
    draggable: true, // Permet de glisser avec la souris
    focusOnSelect: false, // Empêche la mise au focus des slides
    arrows: true, // Active les flèches
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className={`slider-container ${style.sliderContainerCategorie}`}>
      <Slider {...settings}>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/superHero.jpg" alt="" />
            <p className={`${style.pType}`}>super héros</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/sienceFiction.jpg" alt="" />
            <p className={`${style.pType}`}>science fiction</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/moyenAge.jpg" alt="" />
            <p className={`${style.pType}`}>historique</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/haurreur.jpg" alt="" />
            <p className={`${style.pType}`}>horreur</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/drole.jpg" alt="" />
            {/* <p className={`${style.pType}`}>comique</p> */}
            <p className={`${style.pType}`}>yavuz</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/drame.webp" alt="" />
            <p className={`${style.pType}`}>drama</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/superHero.jpg" alt="" />
            <p className={`${style.pType}`}>super héros</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/sienceFiction.jpg" alt="" />
            <p className={`${style.pType}`}>science fiction</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/moyenAge.jpg" alt="" />
            <p className={`${style.pType}`}>historique</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/haurreur.jpg" alt="" />
            <p className={`${style.pType}`}>horreur</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/drole.jpg" alt="" />
            {/* <p className={`${style.pType}`}>comique</p> */}
            <p className={`${style.pType}`}>yavuz</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/drame.webp" alt="" />
            <p className={`${style.pType}`}>drama</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/superHero.jpg" alt="" />
            <p className={`${style.pType}`}>super héros</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/sienceFiction.jpg" alt="" />
            <p className={`${style.pType}`}>science fiction</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/moyenAge.jpg" alt="" />
            <p className={`${style.pType}`}>historique</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/haurreur.jpg" alt="" />
            <p className={`${style.pType}`}>horreur</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/drole.jpg" alt="" />
            {/* <p className={`${style.pType}`}>comique</p> */}
            <p className={`${style.pType}`}>yavuz</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/categorie/drame.webp" alt="" />
            <p className={`${style.pType}`}>drama</p>
            <div className={`${style.flouGris}`} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Categorie;
