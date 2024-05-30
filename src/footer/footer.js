import React from 'react'
import { TbSend2 } from "../../node_modules/react-icons/tb";
import './footer.css';
import List from '../component/List';
import { BsQrCode } from "../../node_modules/react-icons/bs";
import appStore from '../images/apple-store.png';
import playStore from '../images/google-play.png';
const support =[
    "111 bijoy sarani, dhaka, DH 1515, bangladesh",
    "exclusive@gmail.com",
    "+88815-8879-6774"
];
const account =[
    "my account",
    "login/ register",
    "cart",
    "whislist",
    "shop"
];
const quickLink =[
    "privacy policy",
    "terms of use",
    "FAQ",
    "contact"
];
function Footer() {
  return (
    <footer>
        <div className="sub-footer">
            <div className="head">exclusive</div>
            <div className="h4">subscribe</div>
            <div className="p">get 10% off your first order</div>
            <div className="input">
                <input type="text" placeholder='enter your email' />
                <div className="icon">
                    <TbSend2 />
                </div>
            </div>
        </div>
        <div className="sub-footer">
            <div className="head">support</div>
            {support.map((text,index)=>{
                return <List key={index} text={text} />
            })}
        </div>
        <div className="sub-footer">
            <div className="head">account</div>
            {account.map((text,index)=>(
                <List key={index} text={text} />
            ))}
        </div>
        <div className="sub-footer">
            <div className="head">quick link</div>
            {quickLink.map((text,index)=>(
                <List key={index} text={text} />
            ))}
        </div>
        <div className="sub-footer">
            <div className="head">download app</div>
            <div className="p">save $3 with app new user only</div>
            <div className="download">
                <BsQrCode className='qrcode' />
                <div className="store">
                    <img src={playStore} alt='download from google play store' />
                    <img src={appStore} alt="download from app store" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;