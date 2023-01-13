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
// import { Userbar } from '../../conponents/navbar/userbar';
import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css"; // import css

import "../../../node_modules/video-react/dist/video-react.css"; // import css




// import React from 'react'
// import { Userbar } from './userbar'
// import '../../global.util.css';
// import '../../globals.util.css';
import { Themebtn } from '../../conponents/themebtn/themebtn';
// import Logo from './logo.png';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { navActions } from '../../store/nav-Slice';
import { BiHomeAlt, BiLogOut, BiCommentDetail } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineSetting } from 'react-icons/ai';
import { TbPresentationAnalytics } from 'react-icons/tb';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Avatar } from '@mui/material';





export const Video: React.FC<{}> = () => {

    const dispatch = useDispatch()

    const collapseMenu = useSelector((state: any) => state.nav.isActive);

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const setDarkMode = () => {
        dispatch(navActions.setDarkMode({}))
    }





    const setNavbar = () => {
        // setActive(!active)
        dispatch(navActions.setNavbar({}))
    }


    return (
        <>
            <div className={`body ${darkMode && 'dark'}`}>
                {/* <nav> */}
                <nav className={`${!collapseMenu && 'close'}`}>
                    <div className="logo-name">
                        <div className="logo-image">
                            <Link className='link-styles' to="/">
                                <img src="/images/PhonePe_Images_zjha50 (2).png" alt="" />
                            </Link>
                        </div>

                        <span className="logo_name">
                            <Link className='link-styles' to="/">
                                Zapnode
                            </Link>
                        </span>
                    </div>

                    <div className="menu-items">
                        <ul className="nav-links">
                            <li>
                                <Link className='link-styles' to="/">
                                    <BiHomeAlt className='navbarLogo' />
                                    <span className="link-name">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    {/* <i className="uil uil-favorite"></i> */}
                                    <AiOutlineStar className='navbarLogo' />
                                    <span className="link-name">Favorites</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    {/* <i className="uil uil-chart"></i> */}
                                    <TbPresentationAnalytics className='navbarLogo' />
                                    <span className="link-name">Analytics</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    {/* <i className="uil uil-thumbs-up"></i> */}
                                    <BiCommentDetail className='navbarLogo' />
                                    <span className="link-name">Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    {/* <i className="uil uil-setting"></i> */}
                                    <AiOutlineSetting className='navbarLogo' />
                                    <span className="link-name">Settings</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className="logout-mode">
                            <li>
                                <Link className='link-styles' to="/">
                                    {/* <i className="uil uil-signout"></i> */}
                                    <BiLogOut className='navbarLogo' />
                                    <span className="link-name">Logout</span>
                                </Link>
                            </li>
                            <li className="mode">
                                <Link className='link-styles' to="/">
                                    {/* <i className="uil uil-moon"></i> */}
                                    {collapseMenu && <MdOutlineDarkMode className='navbarLogo' />}
                                    <span className="link-name">Dark Mode</span>
                                </Link>

                                <div className="mode-toggle" onClick={setDarkMode}>
                                    <span className="switch"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>



                <section className="dashboard">
                    <div className="top">
                        <BiMenu onClick={setNavbar} size='35px' className='sidebar-toggle' />

                        {/* <div className="search-box">
                    <BiSearchAlt2 className='sidebar-toggle search-logo' />
                    <input type="text" placeholder="Search here..." />
                </div> */}

                        <div className="user-details">
                            <div className="username d-none d-md-block">
                                {/* Hello username */}
                                Samuel
                            </div>
                            <img src={profilePic} alt='profilePicture' className="userpicture" />
                        </div>

                    </div>

                    <div className="dash-content">
                        <div className="overview">

                            <div className='flex md:flex-row flex-col'>
                                <div className='md:w-[70%] w-full'>
                                    {/* <video>
                                        <source src='https://d2rakmst905e2v.cloudfront.net/Aladdin.mp4'>
                                        </source>

                                    </video> */}

                                    <video
                                        controls
                                        // width=""
                                        // height='300px'
                                        width="100%"
                                        // height="1000px"
                                        className=''

                                    >
                                        {/* <source src="/video-example.webm" type="video/webm" /> */}
                                        <source src="https://d2rakmst905e2v.cloudfront.net/Aladdin.mp4" type="video/mp4"
                                        />
                                        Sorry, your browser doesn't support videos.
                                    </video>
                                    {/* <Player
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="https://d2rakmst905e2v.cloudfront.net/Aladdin.mp4"
                                    /> */}

                                    <Avatar
                                        alt="Remy Sharp"
                                        src={profilePic}
                                        // src= {userObject ? userObject.displayPicture : profilePic}
                                        sx={{ width: 48, height: 48 }}
                                    />
                                </div>
                                <div className='w-[30%] ml-5'>
                                    <div className='text-xl text-white'>
                                        Recommended
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
























            {/* <Userbar /> */}

        </>
    )
}