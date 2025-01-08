import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import style from "./source.module.css";

const Source = () => {
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
    <div className={`slider-container ${style.sliderContainerSource}`}>
      <Slider {...settings}>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_canal+.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_disney+.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_Netflix.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_primeVideo.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_canal+.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_disney+.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_Netflix.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_primeVideo.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_canal+.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_disney+.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_Netflix.png" alt="" />
          </div>
        </div>
        <div className={`${style.containerElement}`}>
          <div className={`${style.containerImage}`}>
            <img src="/temporaire/logo_primeVideo.png" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Source;
