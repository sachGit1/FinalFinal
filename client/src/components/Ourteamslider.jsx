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
  
    <div className=" my-5">
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
                <img src="https://i.postimg.cc/pV6DG8mS/g3.jpg" alt="teammember img" style={{width:"11.4rem",borderRadius:"20%"}}/>
                <h4 className="mt-2 text-xl font-medium">Sachini Nawodya</h4>
                 <p >Developer</p>
                 <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://i.postimg.cc/9fQt0jz4/g2.jpg" alt="teammember img" style={{width:"11.4rem",borderRadius:"20%"}}/>
                <h4 className="mt-2 text-xl font-medium">Hiumi Dayarathne</h4>
                 <p >Developer</p>
                 <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://i.postimg.cc/m23QSrHz/g1.jpg" alt="teammember img" style={{width:"11.4rem",borderRadius:"20%"}}/>
                <h4 className="mt-2 text-xl font-medium">Naushi</h4>
                 <p >Designer</p>
                 <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
      </div>
    </>
 );
};
export default Ourteamslider;