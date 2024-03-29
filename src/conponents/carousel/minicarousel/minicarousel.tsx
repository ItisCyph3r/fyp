import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";
import env from "../../../env";
import { useSelector } from "react-redux";
import { parseCurrentDate } from "../../getDate/getDate";
import { MdVerified } from "react-icons/md";

// export default function App() {
export default function MiniCarousel({data}: any) {
        const darkMode = useSelector((state: any) => state.nav.darkMode);
  return (
    <div className='carouselbody !mb-3'>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // mousewheel={true}
        // keyboard={true}

        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
      
        {
            data.map((video: any) => ( 
        <SwiperSlide>
                    
                        
                    <div className={`${darkMode ? 'text-white' : 'text-black'}`} key={video._id}>
                            
                            <Link to={`/watch/${video.uuid}`} className='link-styles' >
                            
                                <div className='flex justify-center'>
                                    <img 
                                        src={`${env.cloudFrontApi}/${video.user._id}/${env.thumbnailApi}/${video.thumbnail}`} 
                                        alt='' 
                                        className="rounded-2xl w-full max-w-[20rem] h-auto max-h-[10rem]" 
                                    />
                                    
                                </div>
                            
                            <div className=" pb-7 h-[114px] mt-2 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="">
                                                    <img src={video.user.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[3.0rem] h-auto"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <>
                                                    <div className="text-[0.95rem]">
                                                        {video.video_title}
                                                    </div>
                                                    {/* {console.log(`${env.videoApi}/${video.user._id}/${env.thumbnailApi}/${video.thumbnail}`)} */}
                                                    </>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-0 ">
                                                <div>
                                                    {video.video_description.length > 80 ? video.video_description.substr(0, 80) + "..." : video.video_description}
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        {video.user.user_name}
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified className="text-[goldenrod]"/>
                                                    </div>
                                                    <div className="ml-1">
                                                        . {parseCurrentDate(video.createdAt)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            </Link>
                        </div>
                        
                    </SwiperSlide>
                    ))
                }
      </Swiper>

    </div>
  );
}
