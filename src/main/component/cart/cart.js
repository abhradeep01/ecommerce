import React from 'react'
import styles from './cart.module.css';
import {FavoriteBorder,Favorite} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {grey} from '@mui/material/colors';

function Cart({img,discount,itemName,price,not,cartEvent}) {
  const [favorite,setFavorite] = React.useState(false);

  return (
    <div className={styles.cart} id='cart' data-item-name={itemName} data-price={price}
      data-discount={discount} data-favorite={favorite}>
        <div className={`${styles.tags} ${discount==='new'?
          styles.green:styles.red}`} style={discount?{display:'block'}:
          {display:'none'}} id='discount' data-discount={discount} >{discount}
        </div>
        <div className={styles.float_icon}>
          {favorite?
            <IconButton onClick={()=>setFavorite(!favorite)}>
              <Favorite className={styles.icon} color='error' />
            </IconButton>:
            <IconButton onClick={()=>setFavorite(!favorite)}>
              <FavoriteBorder className={styles.icon} sx={{color:grey[900]}} />
            </IconButton>
          }
        </div>
        <div className={styles.up}>
          <img src={img} alt={itemName} />
          <button onClick={cartEvent}>add to cart</button>
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