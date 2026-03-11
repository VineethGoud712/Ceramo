import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel() {
  const images = [
    "/images/img_1.png",
    "/images/img_2.png",
    "/images/img_3.png",
    "/images/img_4.png",
  ];

  return (
    <div className="px-6 mt-8">
      <h2 className="text-2xl mb-6">Crafted details</h2>

      <Swiper spaceBetween={16} slidesPerView={1.15}>
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} className="rounded-2xl shadow-premium" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
