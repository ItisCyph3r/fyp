import React, { useState } from 'react';
import S3 from 'aws-sdk/clients/s3';
import { Link } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import '../../globalss.util.css';
import profilePic from '../../images/profile.jpg';
import { BiHomeAlt, BiLogOut, BiCommentDetail, BiMenu } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineSetting } from 'react-icons/ai';
import { TbPresentationAnalytics } from 'react-icons/tb';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import upload from '../../images/upload.svg'

window.Buffer = window.Buffer || require("buffer").Buffer;

const S3Uploader = () => {

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


    const [file, setFile] = useState<any>(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        // Configure the S3 client
        const s3 = new S3({
            region: '',
            accessKeyId: '',
            secretAccessKey: ''
        });

        // Create the S3 upload params



        const params: any = {
            Bucket: '',
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

                    <div className={`dash-content ${darkMode ? 'text-white' : 'text-black'} `}>
                        <div className="overview ">
                            <div className="showwcase ">
                                <div className="title">
                                    <span className="text mt-1">Upload a New Video</span>
                                </div>
                                <div className='flex items-center'>
                                    <img src={profilePic} alt='profilepic' className="rounded-full object-cover w-full max-w-[5rem] h-auto" />

                                    <div className='ml-4'>
                                        <div className='text-2xl'>
                                            Momoh Samuel
                                        </div>
                                        <div className='text-baseline text-[#AAAAAA]'>
                                            @momohsamuel
                                        </div>
                                    </div>
                                </div>
                                <div className='md:mt-0 mt-14 flex items-center justify-center'>
                                    <div className='text-center'>
                                        <div className='flex justify-center'>

                                            <img src={upload} alt=' ' className='w-full max-w-[50%] h-auto' />
                                        </div>
                                        <div className='px-3 '>
                                            <div className='mt-4 text-xl'>
                                                Upload a video to get started
                                            </div>
                                            <div className='text-xs mt-3'>
                                                Start sharing your story and connecting with viewers. Videos you upload will show up here.
                                            </div>
                                        </div>

                                        <div className='mt-3 flex justify-center'>
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                // accept="image/*" 
                                                multiple
                                                id='files'
                                                className='text-center'
                                                title=' hello'
                                            />
                                        </div>

                                        <div>
                                            <button onClick={handleUpload} className='px-8 py-2 rounded-3xl bg-white text-black mt-3'>
                                                Upload
                                            </button>
                                        </div>


                                        {
                                            uploadProgress > 0 && <div className='mt-30'> Upload progress: {uploadProgress} % </div>
                                        }
                                    </div>
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