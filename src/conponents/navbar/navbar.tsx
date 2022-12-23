import React from 'react'
import { Userbar } from './userbar'
import '../../global.util.css';
import '../../globals.util.css';
import { Themebtn } from '../themebtn/themebtn';
// import Logo from './logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { BiHomeAlt } from 'react-icons/bi';


export const Navbar: React.FC<{}> = () => {
    const dispatch = useDispatch()

    const collapseMenu = useSelector((state: any) => state.nav.isActive);

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const setDarkMode = () => {
        dispatch(navActions.setDarkMode({}))
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
                                    <BiHomeAlt color='red'/>
                                    {/* <span className="link-name">Home</span> */}
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    <i className="uil uil-favorite"></i>
                                    <span className="link-name">Favorites</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    <i className="uil uil-chart"></i>
                                    <span className="link-name">Analytics</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    <i className="uil uil-thumbs-up"></i>
                                    <span className="link-name">Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    <i className="uil uil-comments"></i>
                                    <span className="link-name">Comment</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='link-styles' to="/">
                                    <i className="uil uil-setting"></i>
                                    <span className="link-name">Settings</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className="logout-mode">
                            <li>
                                <Link className='link-styles' to="/">
                                    <i className="uil uil-signout"></i>
                                    <span className="link-name">Logout</span>
                                </Link>
                            </li>
                            <li className="mode">
                                <Link className='link-styles' to="/">
                                    <i className="uil uil-moon"></i>
                                    <span className="link-name">Dark Mode</span>
                                </Link>

                                <div className="mode-toggle" onClick={setDarkMode}>
                                    <span className="switch"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Userbar />
            </div>


        </>
    )
}