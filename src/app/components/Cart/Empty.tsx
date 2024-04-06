"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Empty.module.css";
import { MyContext } from "@/app/layout";
import cart from "../../../../public/assets/cart.svg"
import Image from "next/image";
const Empty = () => {
  const context = useContext(MyContext);
  const [sum, setSum] = useState(0);
  const [total,setTotal]=useState<number>(0);

 

  useEffect(() => {
    if (context && context.Products) {
      const newSum = context.Products.reduce(
        (total, item) => total + (item.quantity > 0 ? 1 : 0),
        0
      );
      setSum(newSum);

      const newTotal = context.Products.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      setTotal(newTotal);
    }
  }, [context]);

     return (
      <div className={styles.main}>
        
        <h2 className={styles.title}>Your cart is empty</h2>
        <Image src={cart} alt="" className={styles.img} />

      </div>
    );
  
  
  return null;
};

export default Empty;
