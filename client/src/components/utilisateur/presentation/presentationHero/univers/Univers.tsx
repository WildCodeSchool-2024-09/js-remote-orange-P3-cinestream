import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { sliderClike } from "../../../../commun/slider/sliderClike";
import style from "./univers.module.css";

interface Univers {
  id: number;
  date: string | null;
  description: string | null;
  image: string | null;
  image_rectangle: string | null;
  nom: string;
  premium: number;
  publier: number;
  type: string;
  univers_id: number;
  univers_numero: number;
}

const Univers = () => {
  const [univers, setUnivers] = useState<Univers[]>([]);
  const { idA } = useParams();
  const navigate = useNavigate();

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
    touchMove: true,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const getAllEpisode = async () => {
      const values = {
        idA: idA,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/utilisateur/details/getAllUnivers`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (data.sucssces) {
          setUnivers(data.allEpisodeUnivers);
        }
      } catch (error) {
        console.error(
          "une erreur est survenue l'ore de la récupération des film du meme univers",
        );
      }
    };
    getAllEpisode();
  }, []);

  const handleSelectUnivers = (id: string | null) => {
    if (id) {
      navigate(`/detail/${id}`);
      window.scrollTo(0, 0);
      window.location.reload();
    }
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    sliderClike(handleSelectUnivers);

  return (
    <>
      {univers.length > 0 && (
        <>
          <p className={`${style.titreSectionFilme}`}>Films similaires</p>

          <div className={`slider-container ${style.sliderContainerFilme}`}>
            <div>
              <Slider {...settings}>
                {univers.map((element) => {
                  return (
                    <div
                      key={element.id}
                      className={`${style.elementCourselle}`}
                    >
                      <div
                        className={`${style.containerElement}`}
                        data-id={element.id}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                      >
                        <div className={`${style.containerImage}`}>
                          <img
                            src={
                              element.image_rectangle
                                ? `${import.meta.env.VITE_API_URL}/uploads/${element.image_rectangle}`
                                : "/images/404/fondFilmSansImage.png"
                            }
                            alt=""
                          />
                        </div>
                        <div className={`${style.containerInfo}`}>
                          <p className={`${style.titreFilme}`}>{element.nom}</p>
                          <p className={`${style.desciptionFilme}`}>
                            {element.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Univers;
