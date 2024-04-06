"use client";
import React from "react";
import styles from "./ZX9Speakers.module.css";
import speakers from "../../../../../public/assets/home/mobile/image-speaker-zx9.png";
import spekersDesktop from "../../../../../public/assets/home/desktop/image-speaker-zx9.png";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import Image from "next/image";
import Link from "next/link";
const ZX9Speakers = () => {
  const width = useWindowWidth();
  const desktop = width > 1024;
  return (
    <div className={styles.main}>
      {desktop ? (
        <Image src={spekersDesktop} alt="" className={styles.img} />
      ) : (
        <Image src={speakers} alt="" className={styles.img} />
      )}

      <div className={styles.body}>
        <div className={styles.speaker}>
          <p>ZX9</p>
          <p>SPEAKER</p>
        </div>

        <p className={styles.content}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <button className={styles.button}>
          <Link href="/speakers/zx9-speaker" style={{all:"unset"}}>
          SEE PRODUCT
          </Link>
         </button>
      </div>
    </div>
  );
};

export default ZX9Speakers;
