import React from 'react';
import { IoIosArrowForward } from "../../node_modules/react-icons/io";
function List({link,text,arrow,event}) {
  
  return (
    <li>
        <a href={link}>{text}</a>
        <IoIosArrowForward className='arrow' onClick={event} />
    </li>
  )
}

export default List;