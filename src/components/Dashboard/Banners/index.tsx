import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Slide1 } from "./Slides";

export const Banners = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      style={{ height: "250px", width: "100%" }}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>
    </Swiper>
  );
};
