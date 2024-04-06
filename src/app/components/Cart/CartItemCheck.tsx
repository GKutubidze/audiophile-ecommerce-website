"use  client";
 import styles from "./CartItemCheck.module.css";
import Image from "next/image";
 interface Props {
  name: string;
  img: string;
  amount: number;
  price: number;
}
const CartItemCheck = (props: Props) => {
 
  const { name, amount, price, img } = props;
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image
          src={img.slice(1)}
          alt=""
          width={64}
          height={64}
          className={styles.img}
        />
        <div className={styles.content}>
          <p className={styles.name}>{name.split(" ")[0]}</p>
          <p className={styles.price}>{`$ ${price}`}</p>
        </div>
      </div>

      <div className={styles.amount}>
        <p>{`x${amount}`}</p>
      </div>
    </div>
  );
};

export default CartItemCheck;
