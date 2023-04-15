import React from 'react';
import './landingpage.css';

export const LandingPage: React.FC<{}> = () => {
    return (
        <div className='landingbody'>
            <div className="body-container">
                <div className="container flex justify-around py-3 landnav">
                    <div className="brand text-xl text-white">
                        <a href="/">
                            BabcockTV
                        </a>
                    </div>
                    <div className="signin">
                        <a href="/watch">
                            <button type="button" className="btn">
                                Home
                            </button>
                        </a>
                    </div>
                </div>
                <div className="showcase text-center text-white">
                    <div className="showcase-header">
                        <p className="text-[3rem] text-white leading-normal">
                            Ready to Unlock a World of Knowledge and Entertainment
                        </p>
                        <br />
                        
                        {/* Zapnode streaming is available 24/7.<br />
                        Ready to watch? Create an account first */}
                        {/* Ready to get started? */}
                        <div className="mt-4">
                            <a href="/account">
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