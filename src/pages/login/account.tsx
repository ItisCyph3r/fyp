import React from 'react'
// import '../../global.util.css'
import '../../globals.util.css'
import '../../global.util.css'
import { FcGoogle } from 'react-icons/fc';
import { FaLongArrowAltRight, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-Slice';
import axios from 'axios';
import BUTV from '../../images/unnamed.jpg';
import env from '../../env';
// import { HiEnvelope } from 'react-icons/hi';


export const Account: React.FC<{}> = () => {
    const navigate = useNavigate()
    const [username, setUsername] = React.useState<string>('')

    const [errorMsg, setErrorMsg] = React.useState('');

    const dispatch = useDispatch()

    const CaptureUsername = async () => {
        dispatch(authActions.getUsername(username))

        fetch(`${env.baseUrl}/api/checkEmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
            .then((response) => {
                if (response.ok) {
                // Email exists, navigate to next page
                // Replace 'nextPage' with the actual URL of your next page
                navigate('/login')
            } else {
                // Email does not exist, display error message
                setErrorMsg('Email does not exist');
            }
            })
            .catch((error) => {
              // Handle error
                console.error(error);
            });
    }

    // const checkUsername = () => {
    //     fetch(`${env.baseUrl}/api/checkUsername`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: username
    //         })
    //     });
    // }

    const googleLogin = () => {
        window.open(`${env.baseUrl}/auth/google`, '_self', 'width=500, height=600')
        // window.open('http://localhost:4000/auth/google', '_self', 'width=500, height=600')

    }
    const linkedinLogin = () => {
        window.open(`${env.baseUrl}/auth/linkedin`, '_self', 'width=500, height=600')
        // window.open('http://localhost:4000/auth/linkedin', '_self', 'width=500, height=600')

    }

    return (
        <div className="userAuth h-[100vh] bg-[#252426]">
            <div className="row" style={{ height: '100vh' }}>
                <div className="login-form">

                    <div className="login100-form validate-form">
                        <a href="/">
                            <img src={BUTV} style={{ height: '70px', width: '80px' }}
                                className="login-logo" alt='' />
                        </a>
                        <span className="login100-form-title">
                            Log in to your account
                        </span>
                        <div className="" >
                            <div className='mb-6 text-sm'>
                                <div className='py-2 px-5 border-[1px] border-[grey] rounded-md cursor-pointer' onClick={googleLogin}>
                                    <button>
                                        <span className='!text-black flex items-center'>
                                            <FcGoogle /> &nbsp; &nbsp;
                                            Sign in with <b className='ml-1'>Google</b>
                                        </span>
                                    </button>
                                </div>
                                <div className='py-2 px-5 border-[1px] border-[grey] rounded-md mt-4' onClick={linkedinLogin}>
                                    <button>
                                        <span className='!text-black flex items-center'>
                                            <FaLinkedin color='#0072b1'  /> &nbsp; &nbsp;
                                            Sign in with <b className='ml-1'>LinkedIn</b>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <hr />

                            {/* <div className="wrap-input100 validate-input mt-6" data-validate="Valid email is required: ex@abc.xyz">

                                <input className="input100" type="email" name="username" placeholder="Email" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <FaEnvelope />
                                </span>
                            </div>
                            {
                                errorMsg &&
                                <span style={{ color: 'red', fontSize: '0.75rem' }} className='flex items-center'>
                                    <BsFillExclamationTriangleFill />
                                    <span className='ml-1'> {errorMsg} </span>
                                </span> 
                                
                            } */}
                            

                            
{/* 
                            <span style={{ color: 'red', fontSize: '0.75rem' }}>
                                <%- error %>
                            </span>
                            <Link to='/login'>
                                <div className="container-login100-form-btn mt-12">
                                    <button className="login100-form-btn" onClick={CaptureUsername}>
                                        Next
                                    </button>
                                </div>
                            </Link> */}

                        </div>
                        <div className="text-center p-t-12">
                            <span className="txt1">

                            </span>
                            {/* <a className="txt2" href="#"> */}
                            {/* <!-- Forgot Password? --> */}
                            {/* </a> */}
                        </div>

                        {/* <div className="text-center mt-3 ">
                            <a className="txt2 flex justify-center items-center" href="/signup">
                                Create your Account
                                <span className='ml-1'>
                                    <FaLongArrowAltRight />
                                </span>
                            </a>
                        </div> */}


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