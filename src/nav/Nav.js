import React, { useEffect, useState } from 'react';
import './Nav.css';
import { CiSearch,CiUser,CiShoppingCart,CiHeart } from "../../node_modules/react-icons/ci";
import List from '../component/List';
import {RxCross2} from '../../node_modules/react-icons/rx';
import { CiHome } from "../../node_modules/react-icons/ci";
import { HiOutlineMenu } from "../../node_modules/react-icons/hi";
import { PiSquaresFour } from "../../node_modules/react-icons/pi";
const Nav = () => {
    const [navItems,setNavItems] = useState([]);
    const [headerItems,setHeaderItems] = useState([]);
    const [menuVisible,setMenuVisible] = useState(false);
    const [categoryVisible,setCategoryVisible]= useState(false);
    useEffect(()=>{
        // for nav section
        const nav = document.querySelector('nav');
        const list = nav.querySelectorAll('li');
        var textItem = Array.from(list).map((text)=>text.textContent);
        setNavItems(textItem);

        // for header section
        const header = document.querySelector('header');
        const list1 = header.querySelectorAll('li');
        var listtxt = Array.from(list1).map((text)=>text.textContent);
        setHeaderItems(listtxt);
    },[]);

    //slide menu option for mobile and ipad 
    const Menu =({items=new Array([]),event,setEvent})=>{
        return(
            <div className="menu" style={event?{display:'flex'}:{display:'none'}}>
                <RxCross2 className='remove' onClick={()=>setEvent(!event)} />
                {items.map((item,index)=>(
                    <List key={index} text={item} />
                ))}
            </div>
        )
    }
    //this is the lower bar for mobile and tablet
    const NavLower=()=> {
        return (
          <div className="nav-lower">
              <HiOutlineMenu className='icon' onClick={()=>setMenuVisible(!menuVisible)} />
              <div className="add">
                <CiHeart className='icon' />
                <div>0</div>
              </div>
              <CiHome className='icon' onClick={()=>window.open('./index.html','_self')} />
              <div className="add">
                <CiShoppingCart className='icon' />
                <div>0</div>
              </div>
              <PiSquaresFour className='icon' onClick={()=>setCategoryVisible(true)} />
          </div>
        )
      }
    return (
        <>
            <nav>
                <div className='h1' onClick={()=>window.open('./index.html','_self')} style={{cursor:'pointer'}}>exclusive</div>
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
                    <div className="add">
                        <CiHeart className='icon' />
                        <div>0</div>
                    </div>
                    <div className="add">
                        <CiShoppingCart className='icon' />
                        <div>0</div>
                    </div>
                    <CiUser className='icon' />
                </div>
            </nav>
            <NavLower />
            <Menu items={navItems} event={menuVisible} setEvent={setMenuVisible} />
            <Menu items={headerItems} event={categoryVisible} setEvent={setCategoryVisible} />
        </>
    )
}

export default Nav;