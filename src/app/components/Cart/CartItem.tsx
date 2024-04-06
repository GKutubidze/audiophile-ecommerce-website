'use  client'
import React, { useContext } from 'react'
import styles from "./CartItem.module.css"
import Image from 'next/image';
import { MyContext } from '@/app/layout';
interface Props{
    name:string;
    img:string;
    amount:number;
    price:number;
}
const CartItem = (props:Props) => {
  const context = useContext(MyContext);

  const Decrese=()=>{
    if(context.amount===1){
      return
    }
    context.setAmount(context.amount - 1);
    const index=context.Products.findIndex(item=>{
       return  item.productName.includes(name);
    })
    if(context.Products[index].quantity===1){
      return
    }
    context.Products[index].quantity-=1;
  }
   const  Increase=()=>{
    context.setAmount(context.amount + 1);
    const index=context.Products.findIndex(item=>{
       return  item.productName.includes(name);
       
    })
    console.log(index);
    context.Products[index].quantity+=1;
   }
    const {name,amount,price,img}=props;
  return (

    <div className={styles.main}>
        <div className={styles.imgContainer}>
            <Image src={img.slice(1)} alt='' width={64} height={64} className={styles.img}/>
            <div className={styles.content}>
                <p className={styles.name}>{name.split(" ")[0]}</p>
                <p className={styles.price}>{`$ ${price}`}</p>
            </div>
        </div>


        <div className={styles.amount}>
            <button
              className={styles.button}
              onClick={Decrese}
            >
              -
            </button>
            <p>{amount}</p>
            <button
              className={styles.button}
              onClick={Increase}

            >
              +
            </button>
          </div>
    </div>
  )
}

export default CartItem