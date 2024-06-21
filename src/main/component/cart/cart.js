import React from 'react'
import styles from './cart.module.css';
import {FavoriteBorder,Favorite,Visibility} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {grey} from '@mui/material/colors';
function Cart({img,discount,itemName,price,not}) {
  const [favorite,setFavorite] = React.useState(false);
  return (
    <div className={styles.cart}>
        <div className={`${styles.tags} ${discount==='new'?
          styles.green:styles.red}`} style={discount?{display:'block'}:
          {display:'none'}}>{discount}
        </div>
        <div className={styles.float_icon}>
          <Visibility className={styles.icon} />
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