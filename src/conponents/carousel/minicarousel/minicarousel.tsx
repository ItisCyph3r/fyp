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

import { MdVerified } from 'react-icons/md';


export default function MiniCarousel() {
    return (
        <>
            <div className="carouselbody">
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
                        <div>
                            <Link to="/" className='link-styles'>
                                <div className='h-[180px]'>
                                    <img src={'https://miro.medium.com/max/720/1*sMryEXZVPKFjGNcfSzE8Mw.webp'} alt=''  />
                                </div>
                            </Link>
                            <div className="bg-[#252158] pb-7 h-[184px]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Data Structures & Algorithms
                                            
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                    Welcome to the data structure and algorithm course! In this course, you will learn about the fundamental concepts of data structures and algorithms and how to apply them to solve problems in computer science.
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' />
                                </div>
                            </Link>
                            <div className="bg-[#252158] pb-7 h-[184px]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Programming in C++
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                    Welcome to the programming in C++ course! In this course, you will learn the fundamentals of programming in C++, one of the most popular programming languages in the world.
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://elearn.nptel.ac.in/wp-content/uploads/2022/10/unnamed.jpeg'} alt='' />
                                </div>
                            </Link>
                            <div className=" pb-7 h-[114px] mt-3 text-white">
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
                                            <div className="text-left ml-[3.4rem] text-[0.70rem]  mt-2 ">
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
                        <div>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png'} alt='' width='50%' />
                                </div>
                            </Link>
                            <div className="bg-[#252158] pb-7 h-[184px]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Programming in Python
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                    Welcome to the programming in Python course! In this course, you will learn the fundamentals of programming in Python, how it is used in a variety of applications.
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>   

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                
                                <div className='h-[180px]'>
                                    <img src={'https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png'} alt='' width='50%' />
                                </div>
                            </Link>
                            <div className="bg-[#252158] pb-7 h-[184px]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Programming in Python
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                    Welcome to the programming in Python course! In this course, you will learn the fundamentals of programming in Python, how it is used in a variety of applications.
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
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
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://miro.medium.com/max/720/1*sMryEXZVPKFjGNcfSzE8Mw.webp'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                        Data Structures & Algorithms
                                            
                                        
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                    Welcome to the data structure and algorithm course! In this course, you will learn about the fundamental concepts of data structures and algorithms and how to apply them to solve problems in computer science.
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://elearn.nptel.ac.in/wp-content/uploads/2022/10/unnamed.jpeg'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <Link to="/" className='link-styles'>
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-[2rem]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Introduction to Computer Science
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati aut perspiciatis quod error corporis minus
                                        <br />
                                        <Link to="/" className='link-styles' style={{ color: 'red' }}>Enrol Now</Link>

                                        <Link title="" data-placement="top" data-toggle="tooltip" to="#"
                                            data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i>
                                        </Link>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
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
