import React from 'react'
import { FaArrowRight,FaArrowLeft } from "../../../../node_modules/react-icons/fa";
import styled from 'styled-components';

function Heading({context,heading,icon}) {
  const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  `;
  const Left = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.5rem;
  `;
  const Up = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:0.5rem;
    height:fit-content;
  `;
  const Box = styled.div`
    width:10px;
    height:20px;
    background-color:rgb(243, 54, 54);
    border-radius:0.15rem;
  `;
  const Header = styled.h5`
    font-size:15px;
    font-weight:700;
    text-transform: capitalize;
    color:rgb(243, 54, 54);
    margin:0;
  `;
  const Subheader = styled.h3`
    font-size:16px;
    font-weight:600;
    text-transform:capitalize;
    margin:0;
  `;
  const IconButton = styled.div`
    align-self:flex-end;

    // classs
    &.right-text{
      font-size:16px;
      font-weight:600;
      background-color:rgb(245, 47, 47);
      height:fit-content;
      color:white;
      text-transform: capitalize;
      padding:0.2rem;
      border-radius:0.2rem;
      cursor: pointer;
    }
    &.right-text:hover{
      background-color:white;
      color:rgb(245, 47, 47);
      border:solid 2px rgb(245, 47, 47);
    }
    &.right-icon{
      width:fit-content;
      display: flex;
      flex-direction: row;
      gap:0.5rem;
      font-size:1.05rem;
      &.arrow{
        border-radius:50%;
        background-color:rgb(219, 219, 219);
        padding:0.15rem;
      }
      &.arrow:hover{
        box-shadow:0px 0px 10px rgb(219, 219, 219) ;
      }  
    }
  `;
  return (
    <HeaderContainer>
        <Left>
          <Up>
            <Box></Box>
            <Header>{context}</Header>
          </Up>
          <Subheader>{heading}</Subheader>
        </Left>
        <IconButton className={icon==='view all'?'right-text':'right-icon'} 
        style={icon?{display:'flex'}:{display:'none'}}>
          {icon==='view all'?
           'view all':
           <>
            <FaArrowLeft className={'arrow'}/>
            <FaArrowRight className={'arrow'}/>
           </>
          }
        </IconButton>
    </HeaderContainer>
  )
}

export default Heading;