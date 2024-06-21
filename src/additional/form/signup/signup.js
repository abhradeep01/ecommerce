import React, { useState } from 'react'
import signupimg from '../../../images/Side Image.png';
import { FaEye,FaEyeSlash } from "../../../../node_modules/react-icons/fa";
import '../../../component/style/form.css';
function Signup() {
  const [show,setShow] = useState(false);
  return (
    <div className="form_container sign-up">
      <div className="img">
        <img src={signupimg} alt="" />
      </div>
      <div className="form">
        <div className="head">
          <div className="h1">Create an account</div>
          <div className="h5">Enter your details below</div>
        </div>
        <form action="">
          <div className="input">
            <input type="text" placeholder='Name' />
          </div>
          <div className="input">
            <input type="text" placeholder='Email or Phone Number' />
          </div>
          <div className="inputPass input">
            <input type={show?'text':'password'} placeholder='Password' />
            <div className="passbtn">
              {show?<FaEyeSlash onClick={()=>setShow(!show)} />:
              <FaEye onClick={()=>setShow(!show)} />}
            </div>
          </div>
          <button>create account</button>
          <div className="p">already have an account? <span><a href="/">Log in</a></span></div>
        </form>
      </div>
    </div>
  )
}

export default Signup;