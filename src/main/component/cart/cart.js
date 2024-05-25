import React from 'react'
import { LuEye,LuHeart } from "react-icons/lu";
import styles from './cart.module.css';
function Cart({img,discount,itemName,price,not}) {
  return (
    <div className={styles.cart}>
        <div className={`${styles.tags} ${discount==='new'?
          styles.green:styles.red}`} style={discount?{display:'block'}:
          {display:'none'}}>{discount}
        </div>
        <div className={styles.float_icon}>
          <LuEye className={styles.icon} />
          <LuHeart className={styles.icon} />
        </div>
        <div className={styles.up}>
          <img src={img} alt={itemName} />
          <button>add to cart</button>
        </div>
        <div className={styles.text}>
          <div className={styles.h3}>{itemName}</div>
          <div className={styles.h5}>${price} <span 
          style={not?{display:'inline'}:{display:'none'}}>${not}</span>
        </div>
        </div>
    </div>
  )
}

export default Cart;