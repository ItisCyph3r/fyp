import React from 'react'
// import '../../global.util.css'
import '../../globals.util.css'
import '../../globalss.util.css'
import Logo from '../../images/PhonePe_Images_zjha50 (2).png'

export const Login: React.FC<{}> = () => {
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
                        <form className="" action="/login" method="post">
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">

                                <input className="input100" type="text" name="username" placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="password" name="password" placeholder="Password" />

                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <span style={{ color: 'red', fontSize: '0.75rem' }}>
                                {/* <%- error %> */}
                            </span>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="text-center p-t-12">
                            <span className="txt1">

                            </span>
                            {/* <a className="txt2" href="#"> */}
                            {/* <!-- Forgot Password? --> */}
                            {/* </a> */}
                        </div>

                        <div className="text-center mt-3">
                            <a className="txt2" href="/create">
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                        <hr />
                        <div className="text-center social-btn">
                            <a href="/auth/google" className="btn google btn-block">
                                <i className="fa fa-google"></i>
                                Sign in with <b>Google &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                            </a>
                            <a href="/auth/facebook" className="btn facebook btn-block">
                                <i className="fa fa-facebook"></i>
                                Sign in with <b>Facebook</b>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}