import React from "react";
import styles from "./Earphones.module.css";
import Image from "next/image";
import Link from "next/link";
const Earphones = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}></div>
      <div className={styles.content}>
        <p className={styles.earphones}>YX1 EARPHONES</p>
        <button className={styles.button}>
          <Link href="/earphones/yx1-earphones" style={{ all: "unset" }}>
            SEE PRODUCT
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Earphones;
