"use client";
import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/shared/desktop/logo.svg";
import facebook from "../../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../../public/assets/shared/desktop/icon-twitter.svg";
import instagram from "../../../../public/assets/shared/desktop/icon-instagram.svg";
import Link from "next/link";
import ImageComponent from "../ImageComponent/ImageComponent";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <Image src={logo} alt="" className={styles.img} />
        <ul className={styles.menu}>
          {Data.map((item, key) => {
            return (
              <Link key={key} href={item.path} className={styles.link}>
                {item.page}
              </Link>
            );
          })}
        </ul>
        <p className={styles.text}>
          Audiophile is an all in one stop to fulfill your audio needs. We;re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>

      <div className={styles.contact}>
        <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
        <div className={styles.social}>
          <Link href="https://www.facebook.com/" target="_blank">
            <Image src={facebook} alt="" />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <Image src={twitter} alt="" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src={instagram} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
