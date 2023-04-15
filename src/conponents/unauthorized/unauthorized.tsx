import React from 'react'
import { Link } from 'react-router-dom';
import '../../globals.util.css'
import Logo from '../../images/undraw_login_re_4vu2.svg';

export const Unauthorized: React.FC<{}> = () => {
    return (
        <div className="h-[100vh] bg-[#252426]">
            <div className="login-form">
                <div className="login100-form validate-form">
                    <a href="/">
                        <img src={Logo}
                            className="login-logo w-1/2" alt='' />
                    </a>
                    <p className="text-center text-[#252158] text-[1.125rem] md:text-[2rem]"> 
                    You're logged out, Please sign in again 
                    </p>
                    <Link to='/account'>
                        <button className='bg-[#252158] w-full mt-3 p-3 rounded-3xl text-white'>
                            Sign in
                            
                        </button>
                    </Link>
                    {/* <h1>hi</h1> */}
                </div>
            </div>                                                
        </div>
    )
}