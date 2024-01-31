// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import "./styleswiper.css";

// LANGUAGE IMAGES
import Bootstrap from "../../assets/techstacks_img/bootstrap.png";
import Express from "../../assets/techstacks_img/express.png";
import Github from "../../assets/techstacks_img/github.png";
import Laravel from "../../assets/techstacks_img/laravel.png";
import Mongodb from "../../assets/techstacks_img/mongdb.png";
import Nodejs from "../../assets/techstacks_img/nodejs.png";
import Php from "../../assets/techstacks_img/phpphp.png";
import Reactlogo from "../../assets/techstacks_img/react.png";
import Tailwind from "../../assets/techstacks_img/tailwind.png";
import html from "../../assets/techstacks_img/html.png";
import css from "../../assets/techstacks_img/css.png";
import javascript from "../../assets/techstacks_img/javascript.png";

export const TechStacks = () => {
  // LANGUAGES
  const languages = [
    Mongodb,
    Express,
    Reactlogo,
    Nodejs,
    Tailwind,
    Bootstrap,
    Laravel,
    Php,
    Github,
    javascript,
    html,
    css,
  ];

  return (
    <>
      <section className="w-screen bg-gray-200 px-10">
        {/* SWIPER INITIALIZATION */}
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 4,
              slidesPerGroup: 2,
              initialSlide: 1,
            },
            480: {
              slidesPerView: 5,
              slidesPerGroup: 2,
              initialSlide: 1,
            },
            768: {
              slidesPerView: 6,
              slidesPerGroup: 2,
              initialSlide: 1,
            },
            1040: {
              slidesPerView: 8,
              slidesPerGroup: 3,
              initialSlide: 1,
            },
          }}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
        >
          {/* SWIPER SLIDES */}
          {languages.map((language, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center rounded-3xl mx-auto p-5 lg:h-44 md:h-36  h-32 lg:w-44 md:w-36 w-32">
                  <img
                    src={language}
                    className="h-full w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
