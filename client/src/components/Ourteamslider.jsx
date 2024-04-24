import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import Navbar from './Navbar';
import Footer from './Footer';

const Ourteamslider=()=>{
 return (
    <>
  
    <div className=" my-5" style={{backgroundColor:'#AFDCEC', padding:'40px'}}>
     <h3 className="text-center text-3xl py-5" style={{fontFamily:"cursive"}}>Our Team</h3>
      
     <Swiper spaceBetween={30}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        slidesPerView={1}
        modules={[Autoplay,Navigation]}
        className="mySwiper" >
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://i.postimg.cc/52xq9ZJs/1111.jpg" alt="teammember img" style={{width:"11.4rem",borderRadius:"20%"}}/>
                <h4 className="mt-2 text-xl font-medium">Sachini Nawodya</h4>
                 
                 <p className="px-14">PS/2019/097</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://i.postimg.cc/vB7dzF6J/Whats-App-Image-2024-04-23-at-16-16-06.jpg" alt="teammember img" style={{width:"11.4rem",borderRadius:"20%"}}/>
                <h4 className="mt-2 text-xl font-medium">Hiumi Dayarathne</h4>
                 
                 <p className="px-14">PS/2019/085</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://i.postimg.cc/7ZvdBPgf/Whats-App-Image-2024-04-23-at-16-29-08.jpg" alt="teammember img" style={{width:"11.4rem",borderRadius:"20%"}}/>
                <h4 className="mt-2 text-xl font-medium">Naushika Lakshani</h4>
                 
                 <p className="px-14">PS/2019/119</p>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
      </div>
    </>
 );
};
export default Ourteamslider;