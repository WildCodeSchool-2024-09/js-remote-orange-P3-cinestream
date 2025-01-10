import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../commun/slider/sliderDefauts.css";
import style from "./allFilme.module.css";

const AllFilme = () => {
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
      <p className={`${style.titreSectionFilme}`}>Film</p>
      <div className={`slider-container ${style.sliderContainerFilme}`}>
        <div>
          <Slider {...settings}>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/spederMan.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>
                    spider-man 3 retour de l'arenier
                  </p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero saepe possimus quo labore delectus? Ad accusamus
                    reprehenderit velit non quidem.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/indinaJonnes.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Indinia Jonnes</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur adipisci libero officiis pariatur harum
                    perspiciatis repellat velit quas laborum explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/predator.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Predator</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium nostrum perferendis voluptatem ipsa numquam
                    aperiam quos, dolorem, accusamus voluptas, porro nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/ironMan.avif" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Iron Man 2</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusantium voluptatibus esse neque veniam illum repudiandae
                    doloribus eligendi quos distinctio?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/jhonyEnglish.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Johnny English</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus enim consequuntur a, distinctio sapiente esse
                    similique culpa rem.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/spederMan.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>
                    spider-man 3 retour de l'arenier
                  </p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero saepe possimus quo labore delectus? Ad accusamus
                    reprehenderit velit non quidem.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/indinaJonnes.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Indinia Jonnes</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur adipisci libero officiis pariatur harum
                    perspiciatis repellat velit quas laborum explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/predator.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Predator</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium nostrum perferendis voluptatem ipsa numquam
                    aperiam quos, dolorem, accusamus voluptas, porro nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/ironMan.avif" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Iron Man 2</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusantium voluptatibus esse neque veniam illum repudiandae
                    doloribus eligendi quos distinctio?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/jhonyEnglish.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Johnny English</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus enim consequuntur a, distinctio sapiente esse
                    similique culpa rem.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/spederMan.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>
                    spider-man 3 retour de l'arenier
                  </p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero saepe possimus quo labore delectus? Ad accusamus
                    reprehenderit velit non quidem.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/indinaJonnes.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Indinia Jonnes</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur adipisci libero officiis pariatur harum
                    perspiciatis repellat velit quas laborum explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/predator.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Predator</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium nostrum perferendis voluptatem ipsa numquam
                    aperiam quos, dolorem, accusamus voluptas, porro nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/ironMan.avif" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Iron Man 2</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusantium voluptatibus esse neque veniam illum repudiandae
                    doloribus eligendi quos distinctio?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/jhonyEnglish.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Johnny English</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus enim consequuntur a, distinctio sapiente esse
                    similique culpa rem.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/spederMan.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>
                    spider-man 3 retour de l'arenier
                  </p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero saepe possimus quo labore delectus? Ad accusamus
                    reprehenderit velit non quidem.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/indinaJonnes.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Indinia Jonnes</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur adipisci libero officiis pariatur harum
                    perspiciatis repellat velit quas laborum explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/predator.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Predator</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium nostrum perferendis voluptatem ipsa numquam
                    aperiam quos, dolorem, accusamus voluptas, porro nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/ironMan.avif" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Iron Man 2</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusantium voluptatibus esse neque veniam illum repudiandae
                    doloribus eligendi quos distinctio?
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.elementCourselle}`}>
              <div className={`${style.containerElement}`}>
                <div className={`${style.containerImage}`}>
                  <img src="/temporaire/film/jhonyEnglish.jpg" alt="" />
                </div>
                <div className={`${style.containerInfo}`}>
                  <p className={`${style.titreFilme}`}>Johnny English</p>
                  <p className={`${style.desciptionFilme}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus enim consequuntur a, distinctio sapiente esse
                    similique culpa rem.
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

export default AllFilme;
