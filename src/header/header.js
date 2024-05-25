import React from 'react'
import List from '../component/List'
import './header.css';
import slide1 from '../images/iphone.png';
import slide2 from '../images/tv.jpg';
function Header() {
  const category = ["women's fashion",
  "men's fashion","electronics",
  "home & lifestyle","medicine",
  "sports & outdoor","baby's & toys",
   "groceries & pets","health & beauty"]; 
   const Slide =({img,imgAlt,h3Text,link})=>{
    return(
        <div className="slide">
            <img src={img} alt={imgAlt} />
            <div className="text">
                <h3>{h3Text}</h3>
                <a href={link}>shop now</a>
            </div>
        </div>
    )
   } 
  return (
    <header>
        <div className="left">
            {category.map((list,index)=>{
                return <List key={index} text={list} arrow={true} />
            })}
        </div>
        <div className="right">
            <Slide img={slide1} h3Text={'10% off on iphone'} />
            <Slide img={slide2} h3Text={'20% off on apple tv'} />
        </div>
    </header>
  )
}

export default Header;