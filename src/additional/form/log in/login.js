import React, { useState } from 'react'
import '../../../component/style/form.css';
import logInImg from '../../../images/Side Image-1.png'
import { FaEye,FaEyeSlash } from "../../../../node_modules/react-icons/fa";
function Login() {
    const [show,setShow] = useState(false);
    return (
    <div className="form_container log-in">
        <div className="img">
            <img src={logInImg} alt="" />
        </div>
        <div className="form">
            <div className="head">
                <div className="h1">Log in to Exclusive</div>
                <div className="h5">Enter your details below</div>
            </div>
            <form action="">
                <div className="input">
                    <input type="text" placeholder='Email or Phone Number'/>
                </div>
                <div className="input inputPass">
                    <input type={show?'text':'password'} placeholder='Email or Phone Number'/>
                    <div className="passbtn">
                        {show?
                        <FaEyeSlash onClick={()=>setShow(!show)} />:
                        <FaEye onClick={()=>setShow(!show)} />}
                    </div>
                </div>
                <div className="option">
                    <button>Log in</button>
                    <a href="/">forget password?</a>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login;