import React from 'react'
import styles from "./Button.module.css"
type Props={
    title:string;
}
const Button = (props:Props) => {
    const {title}=props;
  return (
         <button className={styles.button}>{title}</button>
   )
}

export default Button