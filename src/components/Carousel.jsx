import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "/images/firstsip.png";
import img2 from "/images/queit.png";
import img3 from "/images/warm.png";

const slides = [
  {
    image: img1,
    title: "The First Sip",
    text: "A thoughtfully crafted ceramic mug that welcomes your mornings with warmth, balance, and a smooth start to every day."
  },
  {
    image: img2,
    title: "The Quiet Pause",
    text: "A carefully crafted ceramic mug that turns small breaks into meaningful moments, bringing warmth and calm between the rhythm of your day."
  },
  {
    image: img3,
    title: "The Warmth",
    text: "A comforting mug in your hands, holding warmth a little longer so you can slow down and enjoy every quiet evening sip."
  }
];

const Carousel = () => {
  return (
    <section className="bg-black text-white px-6 py-3 pt-16 mt-2">
      <div className="mb-10">
        <p className="text-gray-500 text-xl tracking-wide">
          THE SMALL
        </p>

        <h2 className="text-3xl italic font-serif mt-2">
          MOMENTS MATTER
        </h2>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative">

              <img
                src={slide.image}
                alt=""
                className="w-full h-[420px] object-cover rounded-sm"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-sm" />

              <div className="absolute bottom-6 left-5 right-5">
                <h3 className="text-3xl italic font-serif">
                  {slide.title}
                </h3>

                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {slide.text}
                </p>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Carousel;