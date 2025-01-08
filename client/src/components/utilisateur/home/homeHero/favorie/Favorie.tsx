import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import style from "./favorie.module.css";

const Favorie = () => {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <p className={`${style.titreRecent}`}>Favorie</p>
      <div className={`slider-container ${style.sliderContainerCategorie}`}>
        <Slider {...settings}>
          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheDedpool.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>Deadpool</p>
              <p className={`${style.pNotesType}`}>
                ⭐4.8 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheTerminator.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>Terminator Genisys</p>
              <p className={`${style.pNotesType}`}>
                ⭐4.3 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheMatris.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>Matrix</p>
              <p className={`${style.pNotesType}`}>
                ⭐3.7 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheStarWars.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>
                Star Wars : le réveil de la force
              </p>
              <p className={`${style.pNotesType}`}>
                ⭐2.5 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSuideGame.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>Squid Game</p>
              <p className={`${style.pNotesType}`}>
                ⭐3.9 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheHarryPotter.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>Harry Potter 1</p>
              <p className={`${style.pNotesType}`}>
                ⭐1.8 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheSonic.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>Sonic 2</p>
              <p className={`${style.pNotesType}`}>
                ⭐4.0 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/affichePokemon.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>
                Pokemon Detective Pikachu
              </p>
              <p className={`${style.pNotesType}`}>
                ⭐2.3 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
              <div className={`${style.containerElement}`} />
            </div>
          </div>

          <div className={`${style.containerElement}`}>
            <div className={`${style.containerImage}`}>
              <img src="/temporaire/afficheAquoiman.jpg" alt="" />
              <p className={`${style.pTitreFilme}`}>Aquaman : le royom perdu</p>
              <p className={`${style.pNotesType}`}>
                ⭐3.4 <span>| Action ∘ Movie</span>
              </p>
              <div className={`${style.shadowBottum}`} />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Favorie;
