import React, { useState } from 'react';
import AWS from 'aws-sdk'
import S3 from 'react-aws-s3';
import { Link } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import '../../globalss.util.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { BiSearchAlt2, BiMenu } from 'react-icons/bi';
import profilePic from '../../images/profile.jpg';
import "../../../node_modules/video-react/dist/video-react.css"; // import css


import { Themebtn } from '../../conponents/themebtn/themebtn';

import { BiHomeAlt, BiLogOut, BiCommentDetail } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineSetting } from 'react-icons/ai';
import { TbPresentationAnalytics } from 'react-icons/tb';
import { MdOutlineDarkMode, MdVerified } from 'react-icons/md';
import { Avatar } from '@mui/material';





// const S3_BUCKET = 'butv';
// const REGION = 'eu-central-1';


// AWS.config.update({
//     accessKeyId: process.env.accessKeyId,
//     secretAccessKey: process.env.secretAccessKey
// })

// const myBucket = new AWS.S3({
//     params: { Bucket: S3_BUCKET },
//     region: REGION,
// })


window.Buffer = window.Buffer || require("buffer").Buffer;

// console.log(process.env.secretAccessKey)

export const Upload = () => {

    const dispatch = useDispatch()

    const collapseMenu = useSelector((state) => state.nav.isActive);

    const darkMode = useSelector((state) => state.nav.darkMode);

    const setDarkMode = () => {
        dispatch(navActions.setDarkMode({}))
    }

    const setNavbar = () => {
        // setActive(!active)
        dispatch(navActions.setNavbar({}))
    }


    const [progress, setProgress] = useState(0);

    const [selectedFile, setSelectedFile] = useState(null);

    // the configuration information is fetched from the .env file
    const config = {
        bucketName: 'butv',
        region: 'eu-central-1',
        accessKeyId: 'AKIARPEUZAMWYJ3KMTGL',
        secretAccessKey: '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',
    }

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = async (file) => {
        const ReactS3Client = new S3(config);
        // the name of the file uploaded is used to upload it to S3
        ReactS3Client
        .uploadFile(file, file.name)
        .then(data => console.log(data.location))
        .catch(err => console.error(err))
    }





    // const [selectedFile, setSelectedFile] = useState(null);

    // const handleFileInput = (e) => {
    //     setSelectedFile(e.target.files[0]);
    // }

    // const uploadFile = (file) => {

    //     const params = {
    //         ACL: 'public-read',
    //         Body: file,
    //         Bucket: S3_BUCKET,
    //         Key: file.name
    //     };

    //     myBucket.putObject(params)
    //         .on('httpUploadProgress', (evt) => {
    //             setProgress(Math.round((evt.loaded / evt.total) * 100))
    //         })
    //         .send((err) => {
    //             if (err) console.log(err)
    //         })
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

                    <div className={`dash-content ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className="overview">
                            <div className='mt-10'>
                                <div> 
                                    Native SDK File Upload Progress is {progress}%
                                </div>

                                {/* <input type="file" onChange={handleFileInput} />

                                <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button> */}

                                <input type="file" onChange={handleFileInput}/>
                                <br></br>
                                <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
                            </div>
                    </div>
                </div>

                    
            </section>
        </div >
    </>
)}
