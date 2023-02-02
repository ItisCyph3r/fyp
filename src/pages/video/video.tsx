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
import { AiOutlineStar, AiOutlineSetting, AiOutlineCloudUpload } from 'react-icons/ai';
import { TbPresentationAnalytics } from 'react-icons/tb';
import { MdOutlineDarkMode, MdVerified } from 'react-icons/md';
import { Avatar } from '@mui/material';





export const Video: React.FC<{}> = () => {

    const userObject = useSelector((state: any) => state.auth.UserObject);

    const [userState, setUserState] = React.useState({
        displayName: '',
        displayPicture: '',
        // userName: ''
    });

    React.useEffect(() => {
        setUserState({
            displayName: userObject.displayName,
            displayPicture: userObject.displayPicture
        })
    }, [userObject.displayName, userObject.displayPicture])

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
                                <Link className='link-styles' to="/home">
                                    <BiHomeAlt className='navbarLogo' />
                                    <span className="link-name">Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link className='link-styles' to="/upload">
                                    {/* <i className="uil uil-favorite"></i> */}
                                    <AiOutlineCloudUpload className='navbarLogo' />
                                    <span className="link-name">Upload</span>
                                </Link>
                            </li>
                            {/*  */}
                            {/*  */}
                            <li>
                                <Link className='link-styles' to="/home/hehe">
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
                            <div className={`mode-toggle mr-5 flex items-center ${darkMode ? 'text-white' : 'text-black'}`}
                                onClick={setDarkMode}>
                                <div>
                                    Change Theme
                                </div>
                                <span className="switch ml-3"></span>
                            </div>
                            <div className="username d-none d-md-block">
                                {/* Hello username */}
                                {userState.displayName}
                            </div>
                            <div className='flex items-center'>

                                <img src={`${userState.displayPicture}`} alt='profilePicture' className="userpicture" />
                                {/* {userState.displayPicture} */}
                            </div>
                        </div>

                    </div>

                    <div className={`dash-content ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className="overview">
                            <div className={` flex flex-col md:flex-row `}>
                                {/* <div className='md:w-[70%] w-full'>
                                    <video
                                        controls
                                        // width=""
                                        // height='300px'
                                        width="100%"
                                        // height="1000px"
                                        className=''
                                    >
                                        <source src="https://d2rakmst905e2v.cloudfront.net/Aladdin.mp4" type="video/mp4"/>
                                        Sorry, your browser doesn't support videos.
                                    </video>
                                    
                                    <div className="w-[7%] mt-3">
                                        <img src={profilePic} alt='profilepic' className="rounded-full object-cover"/>
                                    </div>
                                </div>
                                <div>
                                    Recommended
                                </div> */}
                                <div className='md:w-[70.0%] w-full'>
                                    <video
                                        controls
                                        // width=""
                                        // height='300px'
                                        width="100%"
                                        // height="1000px"
                                        className=''
                                    >
                                        <source src="https://d2rakmst905e2v.cloudfront.net/Aladdin.mp4" type="video/mp4" />
                                        Sorry, your browser doesn't support videos.
                                    </video>
                                    <div className='text-xl mt-5'>
                                        Object Oriented Programming with Java pt-1
                                        <div className='mt-4 border-b-[1px] border-gray-500'></div>
                                    </div>

                                    <div className='flex items-start md:items-center mt-3 '>
                                        <div className="">
                                            <img src={profilePic} alt='profilepic' className="rounded-full object-cover w-full max-w-[4.5rem] h-auto" />
                                        </div>

                                        <div className='mt-0 ml-2'>
                                            <div className='md:text-xl text-sm'>
                                                Object Oriented Programming with Java
                                            </div>

                                            <div className={`flex items-center mt-0 md:text-sm text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

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
                                <div className='md:w-[30%] w-full md:px-5 px-0 bg-transparent '>
                                    <div className='!text-white title !mt-7 text-xl '>
                                        Recommended
                                    </div>
                                    <div className='flex '>
                                        <div className='w-1/2'>
                                            <img src='https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png' alt='' />
                                        </div>
                                        <div className='ml-3'>
                                            <div className=' text-sm'>
                                                Object Oriented Programming with Java
                                            </div>
                                            <div className={`mt-1 text-[0.65rem] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                <div className='flex items-center'>
                                                    Dr. Okoro Raymond
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                </div>

                                                <div className="">
                                                    Jan 1, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex mt-2'>
                                        <div className='w-1/2'>
                                            <img src='https://miro.medium.com/max/720/1*sMryEXZVPKFjGNcfSzE8Mw.webp' alt='' />
                                        </div>
                                        <div className='ml-3'>
                                            <div className=' text-sm'>
                                                Object Oriented Programming with Java
                                            </div>
                                            <div className={`mt-1 text-[0.65rem] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                <div className='flex items-center'>
                                                    Dr. Okoro Raymond
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                </div>

                                                <div className="">
                                                    Jan 1, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex mt-2'>
                                        <div className='w-1/2'>
                                            <img src='https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648' alt='' />
                                        </div>
                                        <div className='ml-3'>
                                            <div className=' text-sm'>
                                                Object Oriented Programming with Java
                                            </div>
                                            <div className={`mt-1 text-[0.65rem] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                <div className='flex items-center'>
                                                    Dr. Okoro Raymond
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                </div>

                                                <div className="">
                                                    Jan 1, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex mt-2'>
                                        <div className='w-1/2'>
                                            <img src='https://elearn.nptel.ac.in/wp-content/uploads/2022/10/unnamed.jpeg' alt='' />
                                        </div>
                                        <div className='ml-3'>
                                            <div className=' text-sm'>
                                                Object Oriented Programming with Java
                                            </div>
                                            <div className={`mt-1 text-[0.65rem] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                <div className='flex items-center'>
                                                    Dr. Okoro Raymond
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                </div>

                                                <div className="">
                                                    Jan 1, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex mt-2'>
                                        <div className='w-1/2'>
                                            <img src='https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png' alt='' />
                                        </div>
                                        <div className='ml-3'>
                                            <div className=' text-sm'>
                                                Object Oriented Programming with Java
                                            </div>
                                            <div className={`mt-1 text-[0.65rem] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                <div className='flex items-center'>
                                                    Dr. Okoro Raymond
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                </div>

                                                <div className="">
                                                    Jan 1, 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex mt-2'>
                                        <div className='w-1/2'>
                                            <img src='https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png' alt='' />
                                        </div>
                                        <div className='ml-3'>
                                            <div className=' text-sm'>
                                                Object Oriented Programming with Java
                                            </div>
                                            <div className={`mt-1 text-[0.65rem] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                <div className='flex items-center'>
                                                    Dr. Okoro Raymond
                                                    <div className="ml-1">
                                                        <MdVerified />
                                                    </div>
                                                </div>

                                                <div className="">
                                                    Jan 1, 2023
                                                </div>
                                            </div>
                                        </div>
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