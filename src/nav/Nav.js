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
        // for nav section menu
        const nav = document.querySelector('nav');
        const list = nav.querySelectorAll('li');
        const textItem = Array.from(list).map(text=>{
            const anchore = text.querySelector('a').href;
            return{
                li:text.textContent,
                link:anchore
            }
        });
        setNavItems(textItem);

        // for header section menu
        const header = document.querySelector('header');
        const list1 = header.querySelectorAll('li');
        var listtxt = Array.from(list1).map((text)=>{
            const anchore = text.querySelector('a');
            return{
                li:text.textContent,
                link:anchore
            }
        });
        setHeaderItems(listtxt);
    },[]);

    //slide menu component for mobile and ipad 
    const Menu =({items=new Array([]),event,setEvent})=>{
        return(
            <div className="menu" style={event?{display:'flex'}:{display:'none'}}>
                <RxCross2 className='remove' onClick={()=>setEvent(!event)} />
                {items.map((item,index)=>(
                    <List key={index} text={item.li} link={item.link} />
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
                <p>0</p>
              </div>
              <CiHome className='icon' onClick={()=>window.open('./index.html','_self')} />
              <div className="add">
                <CiShoppingCart className='icon' />
                <p>0</p>
              </div>
              <PiSquaresFour className='icon' onClick={()=>setCategoryVisible(true)} />
          </div>
        )
    }

    return (
        <>
            {/* this is the nav for laptop or desktop scren */}
            <nav>
                <div className='h1' onClick={()=>window.open('./index.html','_self')} style={{cursor:'pointer'}}>exclusive</div>
                <ul>
                    <List text={'home'} link={'./index.html'}/>
                    <List text={'contact'} />
                    <List text={'about'} />
                    <List text={'sign up'} />
                </ul>
                <div className="input">
                    <input type="text" placeholder="what are you looking for?" />
                    <div className="search">
                        <CiSearch className='search-icon' />
                    </div>
                </div>
                <div className="settings">
                    <div className="add">
                        <CiHeart className='icon' />
                        <p>0</p>
                    </div>
                    <div className="add">
                        <CiShoppingCart className='icon' />
                        <p>0</p>
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