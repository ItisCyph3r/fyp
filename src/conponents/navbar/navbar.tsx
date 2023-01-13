import React from 'react'
// import { Userbar } from './userbar'
import '../../global.util.css';
import '../../globals.util.css';
import { Themebtn } from '../themebtn/themebtn';
// import Logo from './logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { BiHomeAlt, BiLogOut, BiCommentDetail } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineSetting } from 'react-icons/ai';
import { TbPresentationAnalytics } from 'react-icons/tb';
import { MdOutlineDarkMode } from 'react-icons/md';



// import { navActions } from '../../store/nav-Slice';
import { BiSearchAlt2, BiMenu } from 'react-icons/bi';
import profilePic from '../../images/profile.jpg';
import Sample from '../../images/brooke-cagle-kElEigko7PU-unsplash.jpg';
import MiniCarousel from '../carousel/minicarousel/minicarousel';
import MainCarousel from '../carousel/maincarousel/maincarousel';



export const Navbar: React.FC<{}> = (Prop: any) => {
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
            
        </>
    )
}