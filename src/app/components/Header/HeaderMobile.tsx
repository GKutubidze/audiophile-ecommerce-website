"use client";
import React, { useContext } from "react";
import styles from "./HeaderMobile.module.css";
import Image from "next/image";
import menuicon from "/public/assets/menu.svg";
import audiophile from "../../../../public/assets/audiophile .svg";
import basket from "../../../../public/assets/basket.svg";
import { MyContext } from "@/app/layout";
import ConditionalMenu from "../ConditionalMenu/ConditionalMenu";
import { useRouter } from "next/navigation";
 
export const HeaderMobile = () => {
  const router = useRouter();
  const context = useContext(MyContext);
 
     return (
      <>
        <div className={styles.header}>
          <Image
            src={menuicon}
            alt=""
            className={styles.menu}
            onClick={() => {
              context.setIsOpen(!context.isOpen);
            }}
          />
          <Image
            src={audiophile}
            alt=""
            onClick={() => {
              router.push("/");
            }}
            className={styles.audiophile}
          />
          <Image
            src={basket}
            alt=""
            className={styles.basket}
            onClick={() => {
              context.setIsCartOpen(!context.isCartOpen);
            }}
          />
        </div>
        {context.isOpen && <ConditionalMenu />}
      </>
    );
  
};
