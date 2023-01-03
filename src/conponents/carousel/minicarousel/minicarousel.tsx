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

                    slidesPerView={3}
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
                                <img src={'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648'} alt='' width='50%' />
                            </Link>
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
                            <div className="bg-[#252158] pb-7">
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
