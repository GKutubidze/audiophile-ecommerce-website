"use client";
import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/shared/desktop/logo.svg";
import facebook from "../../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../../public/assets/shared/desktop/icon-twitter.svg";
import instagram from "../../../../public/assets/shared/desktop/icon-instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <Image src={logo} alt="" className={styles.img} />
        <ul className={styles.menu}>
          <Link href="/" className={styles.link}>
            HOME
          </Link>
          <Link href="/" className={styles.link}>
            HEADPHONES
          </Link>
          <Link href="/" className={styles.link}>
            SPEAKERS
          </Link>
          <Link href="/" className={styles.link}>
            EARPHONES
          </Link>
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
          <Image src={facebook} alt="" />
          <Image src={twitter} alt="" />
          <Image src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
