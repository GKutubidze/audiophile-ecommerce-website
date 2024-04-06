import React from "react";
import styles from "./ProductTitle.module.css";
const ProductTitle = (props: { title: string }) => {
   return (
    <div className={styles.main}>
      <p className={styles.title}> {props.title}</p>
    </div>
  );
};

export default ProductTitle;
