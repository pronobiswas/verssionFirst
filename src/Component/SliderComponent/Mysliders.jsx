import React from 'react'
import './sliderStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Mysliders = () => {
  return (
    <div className='container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination = {{
            clickable : true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="box"><h1>horibol</h1></div></SwiperSlide>
        <SwiperSlide><div className="box"><h1>horibol</h1></div></SwiperSlide>
        <SwiperSlide><div className="box"><h1>horibol</h1></div></SwiperSlide>
        <SwiperSlide><div className="box"><h1>horibol</h1></div></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Mysliders
