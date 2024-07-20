import React from 'react'
// import styles from './cart.module.css';
import {FavoriteBorder,Favorite} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {grey} from '@mui/material/colors';
import styled from 'styled-components';

function Cart({img,float,itemName,price,not,cartEvent,favEvent}) {
  const [favorite,setFavorite] = React.useState(false);

  const Cart = styled.div`
    min-width:10rem;
    max-width:10.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    padding:0.25rem;
    box-shadow:0px 0px 0px 1px rgb(235, 235, 235);
    border-radius:0.5rem;
    gap:0.5rem;

    //hover
    &:hover{
      box-shadow:0px 0px 5px rgb(175, 175, 175);
      transition:box-shadow 0.1ms;
      cursor: pointer;
    }
  `;
  const Float = styled.div`
    position: absolute;
    z-index:1;
    top:0.5rem;
    left:0.5rem;
    width:fit-content;
    padding:0.2rem 0.25rem;
    font-size:0.9rem;
    font-weight:700;
    border-radius:0.25rem;
    text-align: center;

    &.new{
      text-transform: capitalize;
      color:white;
      background-color:green;
    }
    &.discount{
      color:white;
      background-color:red;
    }
  `;
  const Button = styled.button`
    background-color:black;
    height:1.75rem;
    color:white;
    border:none;
    outline:none;
    font-size:0.8rem;
    font-weight:600;
    padding:0.2rem;
    text-transform: capitalize;
    border-radius:0.15rem;
    &:hover{
      opacity:0.9;
      cursor: pointer;
    }
  `;
  const FloatIcon = styled.div`
    position: absolute;
    width:fit-content;
    top:2px;
    right:2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:0.25rem;
    z-index:1;

    &>.icon{
      font-size:1.5rem;
      background-color:rgb(231, 231, 231);
      border-radius:50%;
      padding:0.15rem;
    }
  `;
  const ProductImg = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    gap:0.2rem;
    &>img{
      width:100%;
    }
  `;
  const ProductDesc =styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    gap:0.25rem;
  `;
  const Price = styled.h5`
    text-transform: capitalize;
    font-size:14px;
    font-weight:600;
    margin:0;
    color:red;
  `;
  const Productname = styled.h3`
    font-size:13px;
    font-weight:700;
    margin:0;
    text-transform: capitalize;

  `;
  const NotPrice = styled.span`
    font-size:13px;
    color:rgb(168, 164, 164);
    font-weight:600;
  `;
  const onclickevent =(e)=>{
    setFavorite(!favorite);
    favEvent(e);
  }
  return (
    <Cart id='cart' data-item-name={itemName} data-price={price}
      data-discount={float} data-favorite={favorite} data-set-favorite={setFavorite}>
        <Float className={float==='new'?'new':'discount'} style={float?{display:'block'}:
          {display:'none'}} id='discount'>{float}
        </Float>
        <FloatIcon>
          {favorite?
            <IconButton onClick={onclickevent}>
              <Favorite className={'icon'} color='error' />
            </IconButton>:
            <IconButton onClick={onclickevent} >
              <FavoriteBorder className={'icon'} sx={{color:grey[900]}} />
            </IconButton>
          }
        </FloatIcon>
        <ProductImg>
          <img src={img} alt={itemName} />
          <Button onClick={cartEvent}>add to cart</Button>
        </ProductImg>
        <ProductDesc>
          <div>
            <Productname>{itemName}</Productname>
          </div>
          <div>
            <Price>${price} <NotPrice 
              style={not?{display:'inline'}:{display:'none'}}>${not}</NotPrice>
            </Price>
          </div>
        </ProductDesc>
    </Cart>
  )
}

export default Cart;