import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/bundle";
import "./minicarousel.css";

import '../../../globals.util.css';
import '../../../globalss.util.css';
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

import profilePic from '../../../images/profile.jpg';
import { Avatar } from "@mui/material";
import { profile } from "console";
import { useSelector } from 'react-redux';
import { MdVerified } from 'react-icons/md';


export default function MiniCarousel() {

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


                    <SwiperSlide>
                        <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                <img src={'https://miro.medium.com/max/720/1*sMryEXZVPKFjGNcfSzE8Mw.webp'} alt=''  />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-2 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="w-[15%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                    Data Structures & Algorithms
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-0 ">
                                                <div>
                                                Welcome to the data structure and algorithm course! In this course, you will ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>    



                    <SwiperSlide>
                        <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-3 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex ">
                                            <div className="w-[15%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                        Programming in C++  
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-0 ">
                                                <div>
                                                Welcome to the programming in C++ course! In this course, you will learn ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>    

                    

                    <SwiperSlide>
                        <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://elearn.nptel.ac.in/wp-content/uploads/2022/10/unnamed.jpeg'} alt='' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-3 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="w-[18%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                        Object Oriented Programming with Java   
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.0rem] text-[0.70rem]  mt-0 ">
                                                <div>
                                                    Welcome to the programming in Java course! In this course, you will learn  ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>    

                    <SwiperSlide>
                        <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png'} alt='' width='50%' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-3">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="w-[15%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                    Introduction to Programming in Python
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-2 ">
                                                <div>
                                                Welcome to the programming in Python course! In this course, you will learn ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>    


                        
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
                    <SwiperSlide>
                    <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                <img src={'https://miro.medium.com/max/720/1*sMryEXZVPKFjGNcfSzE8Mw.webp'} alt=''  />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-2 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="w-[15%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                    Data Structures & Algorithms
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-0 ">
                                                <div>
                                                Welcome to the data structure and algorithm course! In this course, you will ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                    <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-3 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex ">
                                            <div className="w-[15%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                        Programming in C++  
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-0 ">
                                                <div>
                                                Welcome to the programming in C++ course! In this course, you will learn ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://elearn.nptel.ac.in/wp-content/uploads/2022/10/unnamed.jpeg'} alt='' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-3 ">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="w-[18%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                        Object Oriented Programming with Java   
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.0rem] text-[0.70rem]  mt-0 ">
                                                <div>
                                                    Welcome to the programming in Java course! In this course, you will learn  ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png'} alt='' width='50%' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-3">
                                <div className="">
                                    <div className="w-full h-[] ">
                                        <div className="flex">
                                            <div className="w-[15%]">
                                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                                </div>
                                                
                                                <div className="text-left ml-2 mt-1">
                                                    <div className="text-[0.95rem]">
                                                    Introduction to Programming in Python
                                                    </div>
                                                </div>      
                                            </div>
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-2 ">
                                                <div>
                                                Welcome to the programming in Python course! In this course, you will learn ...
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <div>
                                                        Dr. Okoro Raymond 
                                                    </div>
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                    <div className="ml-1">
                                                        . 1 day ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>

                    
                </Swiper>
            </div>
        </>
    );
}
