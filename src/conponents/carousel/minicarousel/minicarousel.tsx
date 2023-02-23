// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/bundle";
import "./minicarousel.css";

import '../../../globals.util.css';
// import '../../../globalss.util.css';
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { MdVerified } from 'react-icons/md';
import env from "../../../env";
import { parseCurrentDate } from "../../getDate/getDate";


export default function MiniCarousel({data}: any) {

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    return (
        <>
            <div className={`carouselbody ${darkMode ? 'bg-[#252426' : 'bg-white'}`}>
            
                <Swiper
                    // slidesPerView={1}
                    // spaceBetween={30}
                    // loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={false}
                    // modules={[Pagination, Navigation]}
                    // className="mySwiper"
                    navigation={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

            {
                data.map((video: any) => (
                <SwiperSlide>
                    
                        
                    <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            
                            <Link to={`/home/${video.uuid}`} className='link-styles'>
                                
                                <div className=''>
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










            <div className="carouselbodyy">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    
                    // slidesPerView={3}
                    // spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    // className="mySwiper"
                >











{
                        data.map((video: any) => (

                    <SwiperSlide>
                    <div className={`${darkMode ? 'text-white' : 'text-black'} mb-[6rem]`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={`${env.cloudFrontApi}/${video.user._id}/${env.thumbnailApi}/${video.thumbnail}`} alt='' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-2 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="w-[15%]">
                                                <img src={video.user.display_picture} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                    {video.video_title}
                                                    </div>
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
                                                        {parseCurrentDate(video.createdAt)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>

))
                }                    
                </Swiper>
            </div>
        </>
    );
}
