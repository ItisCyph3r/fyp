import React, { useState } from 'react';
import S3 from 'aws-sdk/clients/s3';
import { Link } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import '../../globalss.util.css';
import profilePic from '../../images/profile.jpg';
import { BiHomeAlt, BiLogOut, BiCommentDetail, BiMenu } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineSetting, AiOutlineCloudUpload } from 'react-icons/ai';
import { TbPresentationAnalytics } from 'react-icons/tb';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import upload from '../../images/upload.svg'
import { Thumbnail } from './thumbnail';
import { FaEnvelope } from 'react-icons/fa';
import BasicSelect from '../../conponents/basic-select/basic-select';
import { useDropzone } from 'react-dropzone';





import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Backdrop, FormHelperText } from '@mui/material';
import { title } from 'process';
import { VideoUpload } from './videoupload';





window.Buffer = window.Buffer || require("buffer").Buffer;

const S3Uploader = () => {

    const dispatch = useDispatch()

    const collapseMenu = useSelector((state: any) => state.nav.isActive);

    const darkMode = useSelector((state: any) => state.nav.darkMode);




    const userObject = useSelector((state: any) => state.auth.UserObject);

    const [userState, setUserState] = React.useState({
        userName: '',
        displayName: '',
        displayPicture: '',
        userId: ''
    });

    React.useEffect(() => {
        setUserState({
            displayName: userObject.displayName,
            displayPicture: userObject.displayPicture,
            userId: userObject._id,
            userName: userObject.userName
        })
    }, [userObject.displayName, userObject.displayPicture, userObject._id, userObject.userName])



    const setDarkMode = () => {
        dispatch(navActions.setDarkMode({}))
    }

    const setNavbar = () => {
        // setActive(!active)
        dispatch(navActions.setNavbar({}))
    }


    // const [file, setFile] = useState<any>(null);

    // const [file, setFile] = useState<any>(null);



















    // const [videoState, setVideoState] = useState<any>({
    //     title: null,
    //     description: null,
    //     course: null,
    //     // file: null
    //     video: null
    // });

    // // const setDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const setDetails = (event: any) => {
    //     const { name, value } = event.target;
    //     setVideoState({
    //         ...videoState,
    //         [name]: value
    //     });
    // };

    // // console.log(videoState)

    // async function data() {
    //     fetch('http://localhost:4000/upload', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             video_title: videoState.title,
    //             video_description: videoState.description,
    //             course: videoState.course,
    //             fileName: videoState.video.name,
    //             userId: userState.userId,
    //             date: new Date()
    //         })
    //     });
    // }
    // // data.json();

    // const [uploadProgress, setUploadProgress] = useState(0);

    // const handleFileChange = (event: any) => {
    //     // event.target.files[0].name = 'fml'
    //     setVideoState({
    //         ...videoState,
    //         video: event.target.files[0]
    //     })
    //     console.log(event.target.files[0].name);
    // }







    







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

                    <div className={`dash-content ${darkMode ? 'text-white' : 'text-black'} `}>
                        <div className="overview ">
                            <div className="showwcase ">
                                <div className="title">
                                    <span className="text mt-1">Upload a New Video</span>
                                </div>
                                <div className='flex items-center'>
                                    <img src={userState.displayPicture} alt='profilepic' className="rounded-full object-cover w-full max-w-[5rem] h-auto" />

                                    <div className='ml-4'>
                                        <div className='text-2xl'>
                                            {/* Momoh Samuel */}
                                            {userState.displayName}
                                        </div>
                                        <div className='text-baseline text-[#AAAAAA]'>
                                            {/* @momohsamuel */}
                                            {userState.userName}
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