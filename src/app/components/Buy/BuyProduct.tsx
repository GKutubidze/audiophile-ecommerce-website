'use client'
import React, { useContext, useState } from "react";
import styles from "./BuyProduct.module.css";
import Image from "next/image";
import Button from "../Buttons/Button";
 import { MyContext } from "@/app/layout";
import { useRouter } from "next/navigation";

interface Props {
  img: string;
  name: string;
  description: string;
  price: number;
}
const BuyProduct = (props: Props) => {
  const router=useRouter();
  const { img, name, description, price } = props;
  const context = useContext(MyContext);

  const [displayedQuantity, setDisplayedQuantity] = useState(1);
  
  const Decrease = () => {
    if (displayedQuantity === 1) {
      return;
    }
    setDisplayedQuantity(displayedQuantity - 1);
  }

  const Increase = () => {
    setDisplayedQuantity(displayedQuantity + 1);
  }
  const addToCart = () => {
    const index=context.Products.findIndex(item=>{
      return  item.productName.includes(name);
   })
   context.Products[index].quantity=displayedQuantity;
   }
 
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
           <p className={styles.back} onClick={()=>{
              router.back();
           }}>Go Back</p>
         <Image
          src={img.slice(1)}
          alt=""
          width={327}
          height={327}
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.new}>NEW PRODUCT</p>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>$ {price}</p>
        </div>

        <div className={styles.addItem}>
          <div className={styles.amount}>
            <button
              className={styles.button}
              onClick={Decrease}
            >
              -
            </button>
            <p>{displayedQuantity}</p>
            <button
              className={styles.button}
              onClick={Increase}
            >
              +
            </button>
          </div>

          <div onClick={addToCart}>
              <Button title="add to cart"  />
              </div>
          </div>
      </div>
    </div>
  );
};

export default BuyProduct;

