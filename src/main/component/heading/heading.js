import React from 'react'
import { FaArrowRight,FaArrowLeft } from "../../../../node_modules/react-icons/fa";
import styles from './heading.module.css';
function Heading({context,heading,icon}) {
  return (
    <div className={styles.heading}>
        <div className={styles.left}>
            <div className={styles.up}>
                <div className={styles.box}></div>
                <div className={styles.h5}>{context}</div>
            </div>
            <div className={styles.h3}>{heading}</div>
        </div>
        <div className={icon==='view all'?styles.right_text:styles.right_icon} 
        style={icon?{display:'flex'}:{display:'none'}}>
          {icon==='view all'?
           'view all':
           <>
            <FaArrowLeft className={styles.arrow}/>
            <FaArrowRight className={styles.arrow} />
           </>
           }
        </div>
    </div>
  )
}

export default Heading;