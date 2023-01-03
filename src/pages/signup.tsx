import React from 'react'

export const Signup: React.FC<{}> = () => {
    return (
        <div className="userAuth">
    <div className="row" style={{height: '100vh'}}>
        <div className="login-form">
            <form className="login100-form validate-form" action="/signup" method="post">
                <a href="/">
                    <img 
                        src="images/PhonePe_Images_zjha50 (2).png" 
                        style={{height: '70px', width: '80px'}} 
                        className="login-logo" 
                        alt=''/>
                </a>
                <span className="login100-form-title">
                    Create an Account
                </span>

                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="email" name="username" placeholder="Email" required/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="displayname" placeholder="Username" required/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa-solid fa-user" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        required
                    />
                    
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                <span style={{color: 'red',fontSize: '0.75rem'}}> 
                    {/* <%- error %> */}
                </span>
                <span style={{color: 'red', fontSize: '0.75rem'}}> 
                    {/* <%- usernameErr %>  */}
                </span>
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                        Sign up now
                    </button>
                </div>

                <div className="specialops d-flex justify-content-around mt-3">
                    {/* <!-- <a className="txt2" href="#">
                        Forgot Password?
                    </a> --> */}
                    <a className="text-center" href="/login">
                        Log in instead
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