import React from 'react'
import '../../global.util.css'
import '../../globals.util.css'
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaEnvelope } from 'react-icons/fa';
import BUTV from '../../images/unnamed.jpg';

export const Create: React.FC<{}> = () => {
    return (
        <div className="userAuth h-[100vh] bg-[#252426]">
            <div className="row" style={{ height: '100vh' }}>
                <div className="login-form">
                    <form className="login100-form validate-form" action="/signup" method="post">
                        <a href="/">
                            <img
                                src={BUTV}
                                style={{ height: '70px', width: '80px' }}
                                className="login-logo"
                                alt='' />
                        </a>
                        <span className="login100-form-title">
                            Create an Account
                        </span>


                        <div className='text-sm mb-6'>
                            <div className='py-2 px-5 border-[1px] border-[grey] rounded-md'>
                                <span className='!text-black flex items-center'>
                                    <FaEnvelope /> &nbsp; &nbsp;
                                    Sign in with <b className='ml-1'>Google</b>
                                </span>
                            </div>
                        </div>

                        <hr />

                        <div className='text-sm mt-6'>
                            <div className='py-2 px-5 border-[1px] border-[grey] rounded-md'>
                                <span className='!text-black flex items-center'>
                                    <FcGoogle /> &nbsp; &nbsp;
                                    Sign in with <b className='ml-1'>Google</b>
                                </span>
                            </div>
                            <div className='py-2 px-5 border-[1px] border-[grey] rounded-md mt-4'>
                                <span className='!text-black flex items-center'>
                                    <FaApple /> &nbsp; &nbsp;
                                    Sign in with <b className='ml-1'>Apple</b>
                                </span>
                            </div>
                        </div>
                        <span style={{ color: 'red', fontSize: '0.75rem' }}>
                            {/* <%- error %> */}
                        </span>
                        <span style={{ color: 'red', fontSize: '0.75rem' }}>
                            {/* <%- usernameErr %>  */}
                        </span>
                        {/* <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Sign up now
                            </button>
                        </div> */}

                        <div className="specialops d-flex justify-content-around mt-5">
                            {/* <!-- <a className="txt2" href="#">
                        Forgot Password?
                    </a> --> */}
                            <a className="!text-center text-gray-700 text-sm" href="/login">
                                Have an account already? <b>Log in</b>
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>

                    </form>
                </div>
                {/* <!-- <div className="col-lg col-md p-5 d-none d-lg-block login-img">
            
        </div> --> */}
            </div>
        </div>
    )
}