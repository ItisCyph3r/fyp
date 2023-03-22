import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
// import '../../globalss.util.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { BiHomeAlt, BiLogOut, BiMenu } from 'react-icons/bi';
import { AiOutlineSetting, AiOutlineCloudUpload, AiOutlineComment, AiFillLike, AiFillDislike, AiOutlineMore } from 'react-icons/ai';
import { MdOutlineDarkMode, MdVerified } from 'react-icons/md';
import { Skeleton } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import VideoPlayer from './videoPlayer';
import { parseCurrentDate } from '../../conponents/getDate/getDate';
import env from '../../env';
import Comment from '../../conponents/comment-section/comment';


export const Video: React.FC<{}> = () => {
    
    const topRef = React.useRef<HTMLDivElement>(null);

    const id = useParams();

    const video_uuid = id.videoID

    const [Video, setVideo] = React.useState<any>([]);
    // {console.log(Video.video_id)}
    React.useEffect(() => {
        axios.get(`${env.baseUrl}/home/${video_uuid}`)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    // console.log(res.data)
                    setVideo(res.data);
                }
            })
    }, [video_uuid])
    // console.log(Video)

    const [Recommended, setRecommended] = React.useState<any>([]);

    

    React.useEffect(() => {
        axios.get(`${env.baseUrl}/upload`)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    const shuffledItems = res.data.sort(() => Math.random() - 0.5);
                    setRecommended(shuffledItems);
                }
            })
    }, [])

    


    const userObject = useSelector((state: any) => state.auth.UserObject);

    const [userState, setUserState] = React.useState({
        user_name: '',
        display_picture: '',
        _id: userObject._id
    });

    React.useEffect(() => {
        setUserState({
            user_name: userObject.user_name,
            display_picture: userObject.display_picture,
            _id: userObject._id
        })
    }, [userObject.user_name, userObject.display_picture, userObject._id])

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

    const deleteVideo = () => {
        axios.get(`${env.baseUrl}/watch?v=${video_uuid}`, { withCredentials: true })
            .then(response => {
                console.log(response.data)
                // console.log('Resource deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting resource', error);
            });
    }
    // console.log(Video.user_id)
    // console.log(userState._id)
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

                        <div className="user-details">
                            <div className={`mode-toggle mr-5 flex items-center ${darkMode ? 'text-white' : 'text-black'}`}
                                onClick={setDarkMode}>
                                {/* <div>
                                    Change Theme
                                </div> */}
                                <span className="switch ml-3"></span>
                            </div>
                            <div className="username d-none d-md-block">
                                {userState.user_name}
                            </div>
                            <div className='flex items-center'>
                                <img src={`${userState.display_picture}`} alt='profilePicture' className="userpicture" />
                            </div>
                        </div>

                    </div>

                    <div className={`dash-content ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className="overview hook">
                        {/* <LinearDeterminate /> */}
                            <div className={` flex flex-col lg:flex-row `} ref={topRef}>    
                                                        
                                <div className= 'lg:w-[65.0%] w-full'>
                                    <VideoPlayer 
                                    src={`https://djboxb6mw1ura.cloudfront.net/${Video.user_id}/video/${Video.file_name}`} 
                                    
                                    />

                                    <div className='text-xl mt-3'>
                                        {/* Object Oriented Programming with Java pt-1 */}
                                        {Video.video_title}
                                        <div className='mt-4 border-b-[1px] border-gray-500'></div>
                                    </div>

                                    <div className='flex items-start md:items-center mt-3 '>
                                        <div className="">
                                            <img src={Video.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[4.0rem] h-auto" />
                                        </div>

                                        <div className='mt-0 ml-2 flex justify-between items-center w-full'>
                                            <div>
                                                <div className='md:text-xl text-sm flex items-center'>
                                                    {/* Object Oriented Programming with Java */}
                                                    {/* {Video.video_title} */}
                                                    @{Video.display_name} 
                                                    <div className="ml-1">
                                                        <MdVerified className='text-[goldenrod]'/>
                                                    </div>
                                                </div>

                                                <div className={`flex items-center mt-0 md:text-sm text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                    <div>
                                                        {/* Dr. Okoro Raymond */}
                                                        {Video.course}
                                                    </div>
                                                    
                                                    <div className="ml-1">
                                                        {/* . 1 day ago */}
                                                        .<span className='ml-1'>uploaded </span> {parseCurrentDate(Video.createdAt)}
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                            {/* <AiOutlineMore
                                                
                                                // onClick={handleClick}
                                            /> */}
                                            {
                                                userState._id === Video.user_id &&
                                                <button className='bg-red-700 px-3 py-1 rounded-2xl' onClick={deleteVideo}>
                                                    
                                                    delete
                                                </button>
                                            }
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='mt-2'>
                                        {Video.video_description}
                                    </div>
                                    
                                    <Comment user={userState} video_id={Video.video_id} />
                                </div>
                                <div className='lg:w-[35%] w-full lg:px-5 px-0 bg-transparent '>
                                    <div className='title !mt-7 text-xl !mb-[1rem]'>
                                        Recommended
                                    </div>
                                    {
                                        Recommended.length === 0 ? 
                                        <div className='flex'>
                                            <div>
                                                <Skeleton variant="rounded" width={210} height={60} /> 
                                            </div>
                                            <div>
                                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} color='red' />
                                            </div>
                                        </div>
                                        : 
                                        Recommended.map((recommend: any, index: number) => (
                                            <Link to={`/home/${recommend.uuid}`} key={index}>
                                                {/* <div className={`}> */}
                                                <div  onClick={()=>{topRef.current?.scrollIntoView({ behavior: 'smooth' });}} className={`flex ${index !== 0 ? 'mt-2' : '' } ${darkMode ? 'text-white' : 'text-black'} rounded-2xl`} key={recommend._id}>
                                                    <div className=''>
                                                        {/* <img 
                                                        src={`https://djboxb6mw1ura.cloudfront.net/${recommend.user._id}/thumbnail/${recommend.thumbnail}`} 
                                                        alt='' 
                                                        className='rounded-2xl w-full max-w-[8rem]  flex justify-center items-center object-cover'
                                                    /> */}
                                                    <img 
                                                        src={`https://djboxb6mw1ura.cloudfront.net/${recommend.user._id}/thumbnail/${recommend.thumbnail}`} 
                                                        alt='' 
                                                        className='rounded-2xl w-[150px] h-[80px] flex justify-center items-center object-cover'
                                                    />
                                                    {/* <img src={Video.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[4.0rem] h-auto" /> */} 
                                                    </div>
                                                    <div className='ml-3'>
                                                        <div className=' text-base'>
                                                            {/* Object Oriented Programming with Java */}
                                                            {recommend.video_title}
                                                        </div>
                                                        <div className={`mt-1 text-[0.65rem] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>

                                                            <div className='flex items-center'>
                                                                {/* Dr. Okoro Raymond */}
                                                                {recommend.user.user_name}
                                                                <div className="ml-1">
                                                                    <MdVerified className='text-[goldenrod]'/>
                                                                </div>
                                                            </div>

                                                            <div className="">
                                                                {/* Jan 1, 2023 */}
                                                                {parseCurrentDate(recommend.createdAt)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}