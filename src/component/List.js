import React from 'react';
import { IoIosArrowForward } from "../../node_modules/react-icons/io";
function List({link,text,arrow}) {
  
  return (
    <li>
        <a href={link}>{text}</a>
        <IoIosArrowForward className='arrow' />
    </li>
  )
}

export default List;