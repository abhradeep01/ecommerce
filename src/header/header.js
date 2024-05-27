import React from 'react'
import List from '../component/List'
import './header.css';
import dataheader from '../data/otherdata.json';
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
            {dataheader.slide.map((item,index)=>{
                return <Slide 
                key={index}
                img={item.img} 
                h3Text={item.head} /> 
            })}
        </div>
    </header>
  )
}

export default Header;