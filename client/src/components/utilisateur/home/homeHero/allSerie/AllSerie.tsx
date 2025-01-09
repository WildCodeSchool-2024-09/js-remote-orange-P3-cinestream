import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import style from "./allSerie.module.css";

const AllSerie = () => {
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
      <p className={`${style.titreSectionSerise}`}>Series</p>
      <div className={`slider-container ${style.sliderContainerSerie}`}>
        <div>
          <Slider {...settings}>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/goodDocteur.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Good Doctor</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum beatae impedit possimus natus tenetur dolor
                    repellendus provident obcaecati cum corporis.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/mercdi.png" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Mercredi</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, odio.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/the100.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>the 100</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur veniam corporis molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/flash.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Flash</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    et hic in, dolor pariatur quas fugit dignissimos tempora
                    itaque aperiam.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/suideGame.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>SquidGame</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/jujukaiSen.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Jujutsu Kaisen</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus voluptate optio nisi vero ipsa vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/goodDocteur.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Good Doctor</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum beatae impedit possimus natus tenetur dolor
                    repellendus provident obcaecati cum corporis.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/mercdi.png" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Mercredi</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, odio.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/the100.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>the 100</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur veniam corporis molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/flash.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Flash</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    et hic in, dolor pariatur quas fugit dignissimos tempora
                    itaque aperiam.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/suideGame.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>SquidGame</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/jujukaiSen.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Jujutsu Kaisen</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus voluptate optio nisi vero ipsa vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/goodDocteur.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Good Doctor</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum beatae impedit possimus natus tenetur dolor
                    repellendus provident obcaecati cum corporis.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/mercdi.png" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Mercredi</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, odio.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/the100.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>the 100</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur veniam corporis molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/flash.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Flash</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    et hic in, dolor pariatur quas fugit dignissimos tempora
                    itaque aperiam.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/suideGame.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>SquidGame</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/jujukaiSen.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Jujutsu Kaisen</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus voluptate optio nisi vero ipsa vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/goodDocteur.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Good Doctor</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum beatae impedit possimus natus tenetur dolor
                    repellendus provident obcaecati cum corporis.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/mercdi.png" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Mercredi</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, odio.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/the100.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>the 100</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur veniam corporis molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/flash.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Flash</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    et hic in, dolor pariatur quas fugit dignissimos tempora
                    itaque aperiam.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/suideGame.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>SquidGame</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/serie/jujukaiSen.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Jujutsu Kaisen</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus voluptate optio nisi vero ipsa vitae.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AllSerie;
