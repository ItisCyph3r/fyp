import React from 'react'
import { Link } from 'react-router-dom'
import '../../global.util.css';
import '../../globals.util.css';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../store/nav-Slice';
import { BiSearchAlt2, BiMenu } from 'react-icons/bi';

export const Userbar: React.FC<{}> = () => {

    const dispatch = useDispatch()

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const setNavbar = () => {
        // setActive(!active)
        dispatch(navActions.setNavbar({}))
    }
    return (
        <section className="dashboard">
            <div className="top">
                {/* <i className="uil uil-bars sidebar-toggle"></i> */}
                <BiMenu onClick={setNavbar} size='35px'  className='sidebar-toggle'/>

                {/* <div className="search-box">
                    <BiSearchAlt2 className='sidebar-toggle search-logo' />
                    <input type="text" placeholder="Search here..." />
                </div> */}

                <div className="user-details">
                    <div className="username d-none d-md-block">
                        {/* Hello username */}
                        Samuel
                    </div>
                    <div className="userpicture">
                        {/* <%- userpicture %> */}
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
                            <span className="text">Trending Movies</span>
                        </div>

                        <div className="activity-data">
                            {/* <> */}
                            <section className="ftco-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="featured-carousel owl-carousel">
                                                {/* <% for(var element= (movie.length-1); element>=0; element--){ %> */}
                                                {/* <Link to="/watch/featured/Spider-Man Far from Home"> */}
                                                <div className="item">
                                                    <div className="work">
                                                        <div
                                                            className="img d-flex align-items-end justify-content-center"
                                                            style={{ backgroundImage: `url(/logo.png)` }}
                                                        >
                                                            <div className="text w-100">
                                                                <h3 className="cardName">  movie[element].name  </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* </Link> */}
                                                {/* <% } %> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* </> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}