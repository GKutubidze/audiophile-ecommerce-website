"use client";
import React, { useContext, useEffect, useState } from "react";
 import { MyContext } from "@/app/layout";
 import styles from "./CartComponentCheckout.module.css"
 import { useRouter } from "next/navigation";
import CartItemCheck from "./CartItemCheck";
const CartComponentCheckout = () => {
  const router=useRouter();
  const context = useContext(MyContext);
  const [sum, setSum] = useState(0);
  const Shipping=50;
  const [total,setTotal]=useState<number>(0);
  const Vat=Math.round(total*0.1);


 

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
        <div className={styles.content}>
          <p className={styles.summary}>summary</p>
           
        </div>
        <div className={styles.container}>
          {context.Products.map((item, key) => {
            if (item.quantity > 0)
              return (
                <CartItemCheck
                  key={key}
                  name={item.productName}
                  img={item.img}
                  amount={item.quantity}
                  price={item.price}
                />
              );
          })}
        </div>

        <div className={styles.checkout}>
            <div className={styles.totalContainer}>
              <p className={styles.name}>total</p>
              <p className={styles.total}>{`$ ${total}`}</p>
            </div>

            <div className={styles.totalContainer}>
              <p className={styles.name}>shipping</p>
              <p className={styles.total}>{`$${Shipping}`}</p>
            </div>

            <div className={styles.totalContainer}>
              <p className={styles.name}>VAT (INCLUDED)</p>
              <p className={styles.total}>{`$ ${Vat}`}</p>
            </div>

            
            
            <div className={styles.totalGrand}>
              <p className={styles.name}>GRAND TOTAL</p>
              <p className={styles.total}>{`$ ${total+Vat+Shipping}`}</p>
            </div>

             <button className={styles.button} onClick={()=>{
              router.push("checkout")
            
             }} >
              CONTINUE & PAY
             </button>
        </div>
      </div>
    );
  }
  
 

export default CartComponentCheckout;
