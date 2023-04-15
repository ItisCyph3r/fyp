import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import BUTV from '../../images/unnamed.jpg';
import { BiHomeAlt, BiLogOut, BiMenu } from 'react-icons/bi';
import { AiOutlineSetting, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdOutlineDarkMode } from 'react-icons/md';
import axios, { AxiosResponse } from 'axios';
import VideoList from '../../conponents/feed/feed';
import env from '../../env';









export const Home: React.FC<{}> = () => {


    const [Feed, setFeed] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get(`${env.baseUrl}/upload`)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    setFeed(res.data);
                }
            })
    }, [])

    

    const dispatch = useDispatch()

    const collapseMenu = useSelector((state: any) => state.nav.isActive);

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const setDarkMode = () => {
        dispatch(navActions.setDarkMode({}))
    }


    const userObject = useSelector((state: any) => state.auth.UserObject);

    // console.log(userObject)
    const [userState, setUserState] = React.useState({
        user_name: '',
        display_picture: '',
        isVerified: ''
    });

    React.useEffect(() => {
        setUserState({
            user_name: userObject.user_name,
            display_picture: userObject.display_picture,
            isVerified: userObject.isverified
        })
    }, [userObject.user_name, userObject.display_picture, userObject.isverified])

    const setNavbar = () => {
        // setActive(!active)
        dispatch(navActions.setNavbar({}))
    }
    const navigate = useNavigate()
    const Logout = () => {
        axios.get(`${env.baseUrl}/auth/logout`, {withCredentials: true})
            .then((res: AxiosResponse) => {
                // console.log(res.data)
                if(res.data === false){
                    console.log('Logged out :)')
                    // window.location.href = '/'
                    navigate('/account');
                }
            }
        )
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
                            
                            {/*  */}
                            {/*  */}
                            {/* <li>
                                <Link className='link-styles' to="/home/hehe">
                                    
                                    <AiOutlineSetting className='navbarLogo' />
                                    <span className="link-name">Settings</span>
                                </Link>
                            </li> */}
                        </ul>

                        <ul className="logout-mode">
                            <li>
                                <button className='link-styles' onClick={Logout}>
                                    {/* <i className="uil uil-signout"></i> */}
                                    <BiLogOut className='navbarLogo' />
                                    <span className="link-name" >Logout</span>
                                </button>
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
                                {/* <div>
                                    Change Theme
                                </div> */}
                                <span className="switch ml-3"></span>
                            </div>
                            <div className="username d-none d-md-block">
                                {/* Hello username */}
                                Hello {userState.user_name}
                            </div>
                            <div className='flex items-center'>

                                <img src={`${userState.display_picture}`} alt='profilePicture' className="userpicture" />
                                {/* {userState.displayPicture} */}
                            </div>
                        </div>

                    </div>

                    <div className="dash-content">
                        <div className="overview">
                            <div className="showwcase !mt-[1.95rem]">
                                <div className="title ">
                                    <span className="text">What would you like to watch ?</span>
                                </div>
                            </div>

                            { <VideoList videoData={Feed}/> }
                        </div>
                    </div>
                </section>
            </div>
























            {/* <Userbar /> */}

        </>
    )
}