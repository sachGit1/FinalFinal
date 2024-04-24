import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSliderCard from './HeroSliderCard';

function HeroSlider() {
  const slidesData = [
    {
      title: "Experience personalized perfection",
      img: "https://i.postimg.cc/15bB3WRb/happy-tailor-1-slider.jpg"
    },

    {
      title: "Every stich is crafted to fit you",
      img: "https://media.istockphoto.com/id/700915440/photo/sewing-machine-stitching-fabic.jpg?s=2048x2048&w=is&k=20&c=NPt5PJQexnpRCmkWTyAC1LGCbghzWoclZ1TogvEZUps="
    },
    {
      title: "From their humble abodes to your wardrobe dreams...",
      img: "https://media.istockphoto.com/id/625470308/photo/clothes-in-a-fancy-shop.jpg?s=2048x2048&w=is&k=20&c=spWwW_VvabW5ZUo-HnO9QYtjeAyxbU57zB6bOqv0s8U="
    },
    {
      title: "Join our online tailoring revolution today!",
      img: "https://media.istockphoto.com/id/923796498/photo/shot-of-a-sunny-fashion-design-studio-we-see-working-personal-computer-hanging-clothes-sewing.jpg?s=2048x2048&w=is&k=20&c=naa9Zqk-YtDPbgPTZBAc3lWmj7Ya283yYIFU2jRuU5Q="
    
    },
  ]
  return (
    <div className='px-2 py-2' style={{ fontFamily: 'Candara, sans-serif' , fontWeight: 'bold' }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((data, index) => (
          <SwiperSlide key={index}>
            <HeroSliderCard title={data.title} img={data.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
