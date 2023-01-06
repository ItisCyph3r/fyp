import React from 'react'
import { Link } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import '../../globalss.util.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { BiSearchAlt2, BiMenu } from 'react-icons/bi';
import profilePic from '../../images/profile.jpg';
import Sample from '../../images/brooke-cagle-kElEigko7PU-unsplash.jpg';
import MiniCarousel from '../../conponents/carousel/minicarousel/minicarousel';
import MainCarousel from '../../conponents/carousel/maincarousel/maincarousel';
import { Navbar } from '../../conponents/navbar/navbar';
import { Userbar } from '../../conponents/navbar/userbar';


export const Home: React.FC<{}> = () => {
    return (
        <>
            <Navbar />
            <Userbar />
            <div className="dash-content">
                <div className="overview">
                    <div className="notFound">
                        Results not found!
                    </div>
                    <div className="showwcase">
                        <div className="title">
                            <span className="text">Trending Movies</span>
                        </div>
                    </div>


                    <div>
                        <div className="title">
                            <span className="text">Computer Science</span>
                        </div>
                        <MiniCarousel />
                    </div>

                    <div>
                        <div className="title">
                            <span className="text">Accounting</span>
                        </div>
                        <MiniCarousel />
                    </div>

                    <div>
                        <div className="title">
                            <span className="text">Mass Communication</span>
                        </div>
                        <MiniCarousel />
                    </div>

                    <div>
                        <div className="title">
                            <span className="text">Medicine</span>
                        </div>
                        <MiniCarousel />
                    </div>

                </div>
            </div>
        </>
    )
}