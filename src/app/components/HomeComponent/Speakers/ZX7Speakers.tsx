import React from "react";
import styles from "./ZX7Speakers.module.css";
import Link from "next/link";
const ZX7Speakers = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <p className={styles.speaker}>ZX7 SPEAKER</p>
        <button className={styles.button}>
        <Link href="/speakers/zx7-speaker" style={{all:"unset"}}>

          SEE PRODUCT
          </Link>
          </button>
      </div>
    </div>
  );
};

export default ZX7Speakers;
