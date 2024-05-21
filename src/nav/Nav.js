import React from 'react';
import './Nav.css';
import { CiSearch,CiUser,CiShoppingCart,CiHeart } from "../node_modules/react-icons/ci";
const Nav = () => {
    const List =({link,text})=>{
        return(
            <li>
                <a href={link}>{text}</a>
            </li>
        )
    }
  return (
    <>
    
        <nav>
            <h1>exclusive</h1>
            <ul>
                <List text={'home'} />
                <List text={'contact'} />
                <List text={'about'} />
                <List text={'sign up'} />
            </ul>
            <div className="input">
                <input type="text" placeholder="search" />
                <div className="search">
                    <CiSearch className='search-icon' />
                </div>
            </div>
            <div className="settings">
                <CiHeart />
                <CiShoppingCart />
                <CiUser />
            </div>
        </nav>
        <div className="nav-lower">
            
        </div>
    </>
  )
}

export default Nav;