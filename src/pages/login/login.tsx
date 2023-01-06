import React from 'react'
import Logo from '../../images/logo.png';
import '../../global.util.css'
import '../../globals.util.css'
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaEnvelope, FaLock } from 'react-icons/fa';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

import { useDispatch, useSelector,  } from 'react-redux';
import { authActions } from '../../store/auth-Slice';
import { Link, useNavigate } from 'react-router-dom'

export const Login: React.FC<{}> = () => {

    const [password, setPassword] = React.useState<string>('')

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const CapturePassword = () => {
        
    }
    const usernamedd = useSelector((state: any) => state.auth.Username);
    const passworddd = useSelector((state: any) => state.auth.Password);

    const SubmitForm = (e: any) => {
        e.preventDefault()

        console.log(usernamedd, ' + ', passworddd)
        navigate('/home')
        
    }

   

    const userObject = useSelector((state: any) => state.auth.Username);
    // console.log(userObject)
    return (
        <div className="userAuth h-[100vh] bg-[#252426]">
            <div className="row" style={{ height: '100vh' }}>
                <div className="login-form">
                    {/* <form className="login100-form validate-form" action="/signup" method="post"> */}
                    <div className="login100-form validate-form" >
                        <a href="/">
                            <img
                                src={Logo}
                                style={{ height: '70px', width: '80px' }}
                                className="login-logo"
                                alt='' />
                        </a>
                        <span className="login100-form-title">
                            Login into your Account
                        </span>

                        <form action='/login' method='post' onSubmit={(e) => {e.preventDefault()}}>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="email" defaultValue={userObject} placeholder='Email' required disabled/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <FaEnvelope />
                                </span>
                            </div>

                            {/* <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="displayname" placeholder="Username" required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                                </span>
                            </div> */}
                            
                            <div className="wrap-input100 validate-input mb-6" data-validate="Password is required">
                                <input className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    autoFocus
                                    // defaultValue={pass}
                                    // value={password} 
                                    onChange={(e) => {  dispatch(authActions.getPassword(e.target.value))  }}
                                    required
                                />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <FaLock />
                                </span>
                            </div>
                            
                            <span style={{ color: 'red', fontSize: '0.75rem' }} className='flex items-center'>
                                {/* let passErrorMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid password, Try again' */}
                                <BsFillExclamationTriangleFill />
                            <span className='ml-1'> Invalid password, Try again </span>
                            </span>
                            <hr className='mt-6' />

                            {/* <div className='text-sm mt-6'>
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
                            </div> */}
                            
                            <span style={{ color: 'red', fontSize: '0.75rem' }}>
                                {/* <%- usernameErr %>  */}
                            </span>
                            
                                <div className="container-login100-form-btn ">
                                    <button className="login100-form-btn" onClick={SubmitForm}>
                                        Login    
                                    </button> 
                                </div>
                            
                        </form>
                        

                        <div className="text-center mt-3 ">
                            <a className="txt2 flex justify-center items-center" href="/signup">
                                Dont have an account ? Sign up
                                <span className='ml-1'>
                                    {/* <FaLongArrowAltRight /> */}
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
                {/* <!-- <div className="col-lg col-md p-5 d-none d-lg-block login-img">
            
        </div> --> */}
            </div>
        </div>
    )
}