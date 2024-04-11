// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import { slides } from "../../../public/slides.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("/public/slides.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img className=" rounded-3xl" src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
