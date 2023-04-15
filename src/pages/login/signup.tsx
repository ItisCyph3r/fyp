import React from 'react'
import '../../global.util.css'
import '../../globals.util.css'


import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import BUTV from '../../images/unnamed.jpg';
import env from '../../env';

export const Signup: React.FC<{}> = () => {

    const [details, setDetails] = React.useState<any>({
        email: null,
        username: null,
        password: null
    })    

// console.log(details)
    
    const setUserCredentials = (event: any) => {
        const { name, value } = event.target;
        setDetails({
            ...details,
            [name]: value
        });
    };

    const SignupUser = () => {
        fetch(`${env.baseUrl}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: details.username,
                email: details.email,
                password: details.password
            }),
        })
            .then((response) => {
                return response.json(); // Parse response body as JSON
            })
            .then((data) => {
                console.log(data); // Log the parsed response data
            })
                .catch((error) => {
                // Handle error
                console.error(error);
            });
    }
    


    return (
        <div className="userAuth h-[100vh] bg-[#252426]">
            <div className="row" style={{ height: '100vh' }}>
                <div className="login-form">
                    <div className="login100-form validate-form" >
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


                        <div className="wrap-input100 validate-input" 
                            // data-validate="Valid email is required: ex@abc.xyz"
                            >
                            <input 
                                className="input100" 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={details.email || ''} 
                                onChange={setUserCredentials}
                                required 
                            />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <FaEnvelope />
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" 
                            // data-validate="Valid email is required: ex@abc.xyz"
                            >
                            <input 
                                className="input100" 
                                type="text" 
                                name="username" 
                                placeholder="Username" 
                                value={details.username || ''} 
                                onChange={setUserCredentials}
                                required 
                            />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <FaUser />
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
                                required
                                value={details.password || ''} 
                                onChange={setUserCredentials}
                            />

                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <FaLock />
                            </span>
                        </div>

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
                            {/* <%- error %> */}
                        </span>
                        <span style={{ color: 'red', fontSize: '0.75rem' }}>
                            {/* <%- usernameErr %>  */}
                        </span>
                        <div className="container-login100-form-btn ">
                            <button className="login100-form-btn" onClick={SignupUser}>
                                Sign up now
                            </button>
                        </div>                       

                        <div className="text-center mt-3 ">
                            <a className="txt2 flex justify-center items-center" href="/account">
                                Log in instead
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