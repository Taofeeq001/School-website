// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import uni1 from '../../Images/univ1.png'
import uni2 from '../../Images/univ2.png'
import uni3 from '../../Images/univ3.png'
import uni4 from '../../Images/uni5.png'
import uni5 from '../../Images/uni6.png'
import uni6 from '../../Images/uni7.jpg'
import uni7 from '../../Images/uni8.png'

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
const Scroll=() => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      autoplay= {{autoplay:true}}
      // pagination = {{paginationDisabledClass}}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        0:{
          slidesPerView:1
        },
        520:{
          slidesPerView:2
        },
        950:{
          slidesPerView:4
        }
      }}
    >
      <SwiperSlide><img src={uni1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={uni2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={uni3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={uni4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={uni5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={uni6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={uni7} alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
}
export default Scroll;