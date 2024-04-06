import React from "react";
import styles from "./AudioGear.module.css";
const AudioGear = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}></div>
      <div className={styles.content}>
        <p className={styles.gear}>
          Bringing you the
          <span>
            <span className={styles.best}>best</span> audio gear
          </span>
        </p>
        <p className={styles.text}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioGear;
