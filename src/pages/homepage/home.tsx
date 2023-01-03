import React from 'react';
import './home.css';

export const Home: React.FC<{}> = () => {
    return (
        <div className='landingbody'>
            <div className="body-container">
                <div className="container flex justify-around py-3 landnav">
                    <div className="brand text-xl text-white">
                        <a href="/">
                            Zapnode<sub>TV</sub>
                        </a>
                    </div>
                    <div className="signin">
                        <a href="/login">
                            <button type="button" className="btn">
                                Login now
                            </button>
                        </a>
                    </div>
                </div>
                <div className="showcase text-center text-white">
                    <div className="showcase-header">
                        <p className="text-5xl text-white">
                            Free movies, TV shows, and more.
                        </p>
                        <br />
                        Zapnode streaming is available 24/7.<br />
                        Ready to watch? Create an account first
                        <div className="mt-4">
                            <a href="/create">
                                <button type="button" className="btn btn-lg">
                                    Let's get started 🥳
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}