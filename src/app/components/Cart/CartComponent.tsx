"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./CartComponent.module.css";
import { MyContext } from "@/app/layout";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";
import Empty from "./Empty";
const CartComponent = () => {
  const router=useRouter();
  const context = useContext(MyContext);
  const [sum, setSum] = useState(0);
  const [total,setTotal]=useState<number>(0);

  console.log(context.isCartOpen)
  const handleRemove = () => {
    const updatedProducts = context.Products.map((item) => ({
      ...item,
      quantity: 0,
    }));
    context.setProducts(updatedProducts);
  };

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

  if (context.isCartOpen && sum>0) {
    return (
      <div className={styles.main}>
        <div className={styles.content}>
          <p className={styles.cart}>{`CART (${sum})`}</p>
          <p className={styles.remove} onClick={handleRemove}>
            Remove All
          </p>
        </div>
        <div className={styles.container}>
          {context.Products.map((item, key) => {
            if (item.quantity > 0)
              return (
                <CartItem
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
             <button className={styles.button} onClick={()=>{
              router.push("checkout")
              context.setIsCartOpen(false);
            
             }} >
              checkout
             </button>
        </div>
      </div>
    );
  }
  else if(context.isCartOpen && sum===0){
    return <Empty/>
  }
  return null;
};

export default CartComponent;
