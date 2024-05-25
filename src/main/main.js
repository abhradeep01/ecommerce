import React from 'react';
import Heading from './component/heading/heading';
import Cart from './component/cart/cart';
import salesproductData from '../data/salesproductdata.json';
import './main.css';

function Main() {
  const Sales =()=>{
    return(
      <div className="shopping-cart">
        <Heading context={"today's"} heading={'flash sales'} icon={'view all'} />
        <div className="container">
          {salesproductData.map((item,index)=>{
            return <Cart key={index} discount={item.discount} img={item.img} 
            itemName={item.productName} price={item.price} not={item.notPrice} />
          })}
        </div>
      </div>
    )
  }
  return (
    <main>
        <Sales />
    </main>
  )
}

export default Main;