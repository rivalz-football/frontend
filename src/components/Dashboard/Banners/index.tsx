import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { slides } from "./Slides";

export const Banners = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      style={{ height: "250px", width: "100%" }}
      autoplay={{
        delay: 5000,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {slides.map((Slide, index) => (
        <SwiperSlide key={index}>
          <Slide />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
