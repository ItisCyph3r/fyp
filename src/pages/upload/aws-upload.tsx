import React from 'react';
import { Link } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import { BiHomeAlt, BiLogOut, BiMenu } from 'react-icons/bi';
import { AiOutlineSetting, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { VideoUpload } from './videoupload';
import BUTV from '../../images/unnamed.jpg';
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3Uploader = () => {

    const dispatch = useDispatch()

    const collapseMenu = useSelector((state: any) => state.nav.isActive);

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const userObject = useSelector((state: any) => state.auth.UserObject);

    const [userState, setUserState] = React.useState({
        user_name: '',
        display_name: '',
        display_picture: '',
        userId: '',
        isVerified: ''
    });

    React.useEffect(() => {
        setUserState({
            display_name: userObject.display_name,
            display_picture: userObject.display_picture,
            userId: userObject._id,
            user_name: userObject.user_name,
            isVerified: userObject.isverified
        })
    }, [userObject.display_name, userObject.display_picture, userObject._id, userObject.user_name, userObject.isverified])



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
                                <Link className='link-styles' to="/watch">
                                    <BiHomeAlt className='navbarLogo' />
                                    <span className="link-name">Home</span>
                                </Link>
                            </li>

                            {
                                userState.isVerified &&
                                <li>
                                <Link className='link-styles' to="/upload">
                                    {/* <i className="uil uil-favorite"></i> */}
                                    <AiOutlineCloudUpload className='navbarLogo' />
                                    <span className="link-name">Upload</span>
                                </Link>
                            </li>
                            }
                            {/* <li>
                                <Link className='link-styles' to="/">
                                    
                                    <AiOutlineSetting className='navbarLogo' />
                                    <span className="link-name">Settings</span>
                                </Link>
                            </li> */}
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
                                <Link className='link-styles' to="/home/hehe">
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

                        <div className="user-details">
                            <div className={`mode-toggle mr-5 flex items-center ${darkMode ? 'text-white' : 'text-black'}`}
                                onClick={setDarkMode}>
                                {/* <div>
                                    Change Theme
                                </div> */}
                                <span className="switch ml-3"></span>
                            </div>
                            <div className="username d-none d-md-block">
                                {/* Hello username */}
                                {userState.user_name}
                            </div>
                            <div className='flex items-center'>
                                <img src={`${userState.display_picture}`} alt='profilePicture' className="userpicture" />
                            </div>
                        </div>

                    </div>

                    <div className={`dash-content ${darkMode ? 'text-white' : 'text-black'} `}>
                        <div className="overview ">
                            <div className="showwcase ">
                                <div className="title">
                                    <span className="text mt-3">Upload a New Video</span>
                                </div>
                                <div className='flex items-center'>
                                    <img src={userState.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[5rem] h-auto" />

                                    <div className='ml-4'>
                                        <div className='text-2xl'>
                                            {userState.display_name}
                                        </div>
                                        <div className='text-baseline text-[#AAAAAA]'>
                                            {userState.user_name}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col'>
                                    <VideoUpload />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
}

export default S3Uploader;