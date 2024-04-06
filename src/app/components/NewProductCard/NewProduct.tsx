import React from "react";
import styles from "./NewProduct.module.css";
 const NewProduct = () => {
  return (
     <div className={styles.main}>
      <div className={styles.overlay}>
        <p className={styles.newProduct}>NEW PRODUCT</p>
        <div className={styles.headphones}>
          <p>XX99 Mark II </p>
          <p>HEADPHONES</p>
        </div>

        <p className={styles.content}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className={styles.button}>SEE PRODUCT</button>
      </div>
    </div>
   );
};

export default NewProduct;
