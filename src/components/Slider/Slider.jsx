/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import slideData from "../../../public/slides.json";

import "swiper/css/bundle";
import "./style.css";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="container_slider">
      <Swiper
        effect={"coverflow"}
        autoplay={true}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image_url} alt="slide_image" />
            <div className="slide-text">
              <div className="px-10 absolute bottom-2">
                <h1 className="text-lg md:text-2xl font-bold pb-2">
                  {slide.title}
                </h1>
                <p className="pb-2">{slide.subtitle}</p>
                <a href={slide.url}>
                  <button className="text-lg font-medium  my-2 px-3 py-1 rounded-xl bg-indigo-600">
                    <Link to={`/properties/${slide.id}`}>{slide.button}</Link>
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
