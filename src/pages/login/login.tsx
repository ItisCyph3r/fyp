import React from 'react'
// import '../../global.util.css'
import '../../globals.util.css'
import '../../global.util.css'
import Logo from '../../images/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaLongArrowAltRight, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { HiEnvelope } from 'react-icons/hi';


export const Login: React.FC<{}> = () => {
    const [next, setNext] = React.useState<boolean>(false)

    const changeDisplay = () => {
        setNext(true)
    }
    return (
        <div className="userAuth h-[100vh] bg-[#252426]">
            <div className="row" style={{ height: '100vh' }}>
                <div className="login-form">

                    <div className="login100-form validate-form">
                        <a href="/">
                            <img src={Logo} style={{ height: '70px', width: '80px' }}
                                className="login-logo" alt='' />
                        </a>
                        <span className="login100-form-title">
                            Log in to your account
                        </span>
                        <div className="" >
                            <div className='mb-6 text-sm'>
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

                            <hr />

                            <div className="wrap-input100 validate-input mt-6" data-validate="Valid email is required: ex@abc.xyz">

                                <input className="input100" type="text" name="username" placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    {/* <i className="fa fa-envelope" aria-hidden="true"></i> */}
                                    <FaEnvelope />
                                </span>
                            </div>

                            {/* <div className="wrap-input100 validate-input">
                                <input className="input100" type="password" name="password" placeholder="Password" />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <FaLock />
                                </span>
                            </div> */}

                            <span style={{ color: 'red', fontSize: '0.75rem' }}>
                                {/* <%- error %> */}
                            </span>
                            <Link to='/signup'>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={changeDisplay}>
                                        Next
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center p-t-12">
                            <span className="txt1">

                            </span>
                            {/* <a className="txt2" href="#"> */}
                            {/* <!-- Forgot Password? --> */}
                            {/* </a> */}
                        </div>

                        <div className="text-center mt-3 mb-3">
                            <a className="txt2 flex justify-center items-center" href="/signup">
                                Create your Account 
                                <span className='ml-1'>
                                    <FaLongArrowAltRight />
                                </span>
                            </a>
                        </div>
                        
                        
                        {/* <div className=" w-full">
                            <div className='w-full px-0 py-1'>
                            <a href="/auth/google" className="btn google btn-block w-full">
                                <span className="fa fa-google">G</span>
                                Sign in with <b>Google &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                            </a>
                            </div>
                            <div className='mt-3'>
                                <a href="/auth/facebook" className="btn facebook btn-block">
                                    <i className="fa fa-facebook"></i>
                                    Sign in with <b>Facebook</b>
                                </a>
                            </div>
                            
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}