import React from 'react'
import { Link } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import '../../globalss.util.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { BiSearchAlt2, BiMenu } from 'react-icons/bi';
import profilePic from '../../images/profile.jpg';
import BUTV from '../../images/unnamed.jpg';
import Sample from '../../images/brooke-cagle-kElEigko7PU-unsplash.jpg';
import MiniCarousel from '../../conponents/carousel/minicarousel/minicarousel';
import MainCarousel from '../../conponents/carousel/maincarousel/maincarousel';
import { Navbar } from '../../conponents/navbar/navbar';
// import { Userbar } from '../../conponents/navbar/userbar';







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
import { MdOutlineDarkMode } from 'react-icons/md';





export const Home: React.FC<{}> = () => {

    const dispatch = useDispatch()

    const collapseMenu = useSelector((state: any) => state.nav.isActive);

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const setDarkMode = () => {
        dispatch(navActions.setDarkMode({}))
    }


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
                                <img src={BUTV} alt="" />
                            </Link>
                        </div>

                        <span className="logo_name">
                            <Link className='link-styles' to="/">
                                BUTV
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

                    <div className="dash-content">
                        <div className="overview">
                            <div className="notFound">
                                Results not found!
                            </div>
                            <div className="showwcase">
                                <div className="title">
                                    <span className="text">What would you like to watch ?</span>
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
                </section>
            </div>
























            {/* <Userbar /> */}

        </>
    )
}