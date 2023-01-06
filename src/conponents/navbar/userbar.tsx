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
import MiniCarousel from '../carousel/minicarousel/minicarousel';
import MainCarousel from '../carousel/maincarousel/maincarousel';


export const Userbar: React.FC<{}> = () => {

    const dispatch = useDispatch()

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const setNavbar = () => {
        // setActive(!active)
        dispatch(navActions.setNavbar({}))
    }

    // interface Image {
    //     url: string;
    //     alt: string;
    // }

    // const images: Image[] = [
    //     {
    //         url: 'https://picsum.photos/id/1018/1000/600',
    //         alt: 'A sunset over a lake'
    //     },
    //     {
    //         url: 'https://picsum.photos/id/1015/1000/600',
    //         alt: 'A mountain range'
    //     },
    //     {
    //         url: 'https://picsum.photos/id/1019/1000/600',
    //         alt: 'A beach with palm trees'
    //     }
    // ];




    return (
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
        </section>
    )
}