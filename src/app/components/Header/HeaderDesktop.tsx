'use client'
import React, { useContext } from "react";
import styles from "./HeaderDesktop.module.css";
import Image from "next/image";
import audiophile from "../../../../public/assets/audiophile .svg";
import basket from "../../../../public/assets/basket.svg";
import { MyContext } from "@/app/layout";
import ConditionalMenu from "../ConditionalMenu/ConditionalMenu";
import { useRouter } from "next/navigation"; // Correct import

export const HeaderDesktop = () => {
 
  const router = useRouter();
  const context = useContext(MyContext);
  return (
    <>
      <div className={styles.header}>
        <Image
          src={audiophile}
          alt=""
          onClick={() => {
            router.push("/");
          }}
          className={styles.audiophile}
        />

        <div>
          <ul className={styles.list}>
            {Data.map((item, key) => {
              return (
                <li
                  onClick={() => {
                    router.push(item.path);
                  }}
                  key={key}
                >
                  {item.page}
                </li>
              );
            })}
          </ul>
        </div>
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

const Data = [
  {
    page: "home",
    path: "/",
  },
  {
    page: "headphones",
    path: "/headphones",
  },
  {
    page: "speakers",
    path: "/speakers",
  },
  {
    page: "earphones",
    path: "/earphones",
  },
];
