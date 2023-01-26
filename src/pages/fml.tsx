// import React from 'react'

// export const Fml: React.FC<{}> = () => {
//     return (
//         <div className='text-green-700'>
//             hekkow wirld
//         </div>
//     )
// }














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
                    navigation={false}
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
                            <div className="bg-[#252158] pb-7 h-[184px]">
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <Link to="/" className='link-styles'>
                                            Object Oriented Programming with Java   
                                        </Link>
                                    </div>
                                    <div className="video-page">
                                    Welcome to the programming in Java course! In this course, you will learn the fundamentals of programming in Java, a powerful programming language used in a variety of applications.
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
        </>
    );
}


<video
controls
width=""
// height='300px'
// width="800px" 
// height="1000px"
className='md:w-[70%] w-full '

>
{/* <source src="/video-example.webm" type="video/webm" /> */}
<source src="https://d2rakmst905e2v.cloudfront.net/Aladdin.mp4" type="video/mp4"
/>
Sorry, your browser doesn't support videos.
</video>























const [file, setFile] = useState<any>(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        // Configure the S3 client
        const s3 = new S3({
            region: 'eu-central-1',
            accessKeyId: 'AKIARPEUZAMWYJ3KMTGL',
            secretAccessKey: '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'
        });

        // Create the S3 upload params



        const params: any = {
            Bucket: 'butv',
            Key: file.name,
            Body: file,
            ContentType: file.type
        };

        // Upload the file to S3 and update the upload progress
        s3.putObject(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }).on('httpUploadProgress', function (progress) {
            const currentProgress = (progress.loaded / progress.total) * 100;
            setUploadProgress(currentProgress);
        });
    }