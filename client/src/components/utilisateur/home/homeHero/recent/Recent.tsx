import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import style from "./recent.module.css";

const Recent = () => {
  const settings = {
    dots: false, // Désactive les points de navigation
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true, // Active le défilement avec la souris ou le doigt
    swipeToSlide: true, // Permet de scroller vers n'importe quelle position
    draggable: true, // Permet de glisser avec la souris
    focusOnSelect: false, // Empêche la mise au focus des slides
    arrows: true, // Active les flèches
  };

  return (
    <>
      <p className={`${style.titreRecent}`}>Sortie récente</p>
      <div className={`slider-container ${style.sliderContainerCategorie}`}>
        <Slider {...settings}>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheTerminator.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>terminator genisys</p>
              <p className={`${style.pNotesType}`}>⭐4.8|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSuideGame.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>squid game</p>
              <p className={`${style.pNotesType}`}>⭐4.7|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSonic.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>sonic</p>
              <p className={`${style.pNotesType}`}>⭐4.5|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheStarWars.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>star wars</p>
              <p className={`${style.pNotesType}`}>⭐4.0|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheTerminator.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>terminator genisys</p>
              <p className={`${style.pNotesType}`}>⭐4.8|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSuideGame.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>squid game</p>
              <p className={`${style.pNotesType}`}>⭐4.7|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSonic.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>sonic</p>
              <p className={`${style.pNotesType}`}>⭐4.5|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheStarWars.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>star wars</p>
              <p className={`${style.pNotesType}`}>⭐4.0|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheTerminator.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>terminator genisys</p>
              <p className={`${style.pNotesType}`}>⭐4.8|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSuideGame.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>squid game</p>
              <p className={`${style.pNotesType}`}>⭐4.7|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSonic.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>sonic</p>
              <p className={`${style.pNotesType}`}>⭐4.5|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheStarWars.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>star wars</p>
              <p className={`${style.pNotesType}`}>⭐4.0|Action ∘ Movie</p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Recent;
