"use client";
import React, { useContext } from "react";
import styles from "./Product.module.css";
import Image from "next/image";
import arrow from "../../../../public/assets/shared/desktop/icon-arrow-right.svg";
import { useRouter } from "next/navigation";
import { MyContext } from "@/app/layout";
interface Props {
  name: string;
  img: string;
}
const Product = (props: Props) => {
  const router = useRouter();
  const context = useContext(MyContext);

  const { name, img } = props;
   return (
    <div className={styles.main}>
      <Image
        src={`/${img}`} // Adjusted the src path
        alt=""
        className={styles.img}
        width={1000}
        height={1000}
      />

      <div className={styles.product}>
        <p className={styles.name}>{name}</p>
        <p className={styles.shop} onClick={()=>{
          router.push(name.toLocaleLowerCase())
          context.setIsOpen(false);
        }}>
          SHOP{" "}
          <span>
            <Image src={arrow} alt="" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Product;
