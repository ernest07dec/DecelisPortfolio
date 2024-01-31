// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import { TechStacksList } from "../jsonfiles/TechStacksList";

export const TechStacks = () => {
  // LANGUAGES
  const languages = TechStacksList;

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
                    src={language?.img}
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
