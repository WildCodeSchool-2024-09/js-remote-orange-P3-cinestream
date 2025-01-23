import Slider from "react-slick";
import style from "./Univers.module.css";

const Univers = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    focusOnSelect: false,
    arrows: true,
  };

  return (
    <>
      <p className={`${style.titreSectionFilme}`}>Films similaires</p>

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

export default Univers;
