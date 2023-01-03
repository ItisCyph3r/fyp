import React from 'react'
// import '../../global.util.css'
import '../../globals.util.css'
// import Logo from '../../images/PhonePe_Images_zjha50 (2).png'
import Logo from '../../images/undraw_page_not_found_re_e9o6.svg';

export const Error404: React.FC<{}> = () => {
    return (
        <div className="h-[100vh] bg-[#252426]">
            <div className="login-form">
                <div className="login100-form validate-form">
                    <a href="/">
                        <img src={Logo}
                            className="login-logo w-1/2" alt='' />
                    </a>
                    <p className="text-center text-[#252158] text-[1.125rem] md:text-[2rem]"> Sorry, this page does not exist :( </p>
                    {/* <h1>hi</h1> */}
                </div>
            </div>                                                
        </div>

    )
}