import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import style from "./topNotes.module.css";

const TopNotes = () => {
  const settings = {
    dots: false, // Désactive les points de navigation
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true, // Active le défilement avec la souris ou le doigt
    swipeToSlide: true, // Permet de scroller vers n'importe quelle position
    draggable: true, // Permet de glisser avec la souris
    focusOnSelect: false, // Empêche la mise au focus des slides
    arrows: true, // Active les flèches
  };

  return (
    <>
      <p className={`${style.titreTopNotes}`}>Les plus populaires</p>
      <div className={`slider-container ${style.sliderContainerTopNotes}`}>
        <div>
          <Slider {...settings}>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>1</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheAquoiman.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️horror ∘ fiction</p>
                  <p className={`${style.pNotes}`}>
                    ⭐4.3 <span>| filme</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>2</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheDedpool.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime} ${style.pGratuit}`}>👑</p>
                  <p className={`${style.pTitre}`}>dedpool</p>
                  <p className={`${style.pType}`}>🎞️horror ∘ fiction</p>
                  <p className={`${style.pNotes}`}>
                    ⭐4.3 <span>| filme</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>3</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheHarryPotter.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>
                    harry potter a l'école des sorcier
                  </p>
                  <p className={`${style.pType}`}>🎞️horror ∘ fiction</p>
                  <p className={`${style.pNotes}`}>
                    ⭐4.3 <span>| filme</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>4</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheMatris.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>matrix</p>
                  <p className={`${style.pType}`}>🎞️horror ∘ fiction</p>
                  <p className={`${style.pNotes}`}>
                    ⭐4.3 <span>| filme</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>5</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/affichePokemon.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>
                    ⭐4.3 <span>| filme</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>6</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheAquoiman.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>
                    ⭐4.3 <span>| filme</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>7</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheDedpool.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>8</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheHarryPotter.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>9</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheMatris.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>10</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/affichePokemon.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>11</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheAquoiman.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>12</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheDedpool.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>13</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheHarryPotter.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>14</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/afficheMatris.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>

            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerFlex}`}>
                <div className={`${style.containerPlaceFilme}`}>
                  <p className={`${style.PlaceFilme}`}>15</p>
                </div>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/affichePokemon.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.pPrenuime}`}>👑</p>
                  <p className={`${style.pTitre}`}>aquoiman</p>
                  <p className={`${style.pType}`}>🎞️Horror ∘ Fiction</p>
                  <p className={`${style.pNotes}`}>⭐4.3 | Filme</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopNotes;
