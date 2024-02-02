// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import { TechStacksList } from "../jsonfiles/TechStacksList";
import { useState } from "react";

export const TechStacks = () => {
  // LANGUAGES
  const languages = TechStacksList;

  const [loopIndex, setLoopIndex] = useState(0);

  return (
    <section className="w-screen bg-gray-200 px-10">
      {/* SWIPER INITIALIZATION */}
      <Swiper
        loop
        initialSlide={loopIndex}
        breakpoints={{
          0: {
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
          480: {
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 6,
            slidesPerGroup: 2,
          },
          1040: {
            slidesPerView: 8,
            slidesPerGroup: 3,
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
        onSlideChange={(swiper) => {
          setLoopIndex(swiper.realIndex % languages.length);
        }}
        modules={[Autoplay]}
      >
        {/* LANGUAGE MAPPING */}
        {languages.map((language, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center rounded-3xl mx-auto p-5 lg:h-44 md:h-36 h-32 lg:w-44 md:w-36 w-32">
              <img
                src={language?.img}
                alt={language?.name}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
