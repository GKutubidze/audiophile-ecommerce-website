import React from "react";
import styles from "./ProductCard.module.css";
import Product from "./Product";

const ProductCard = () => {
  return (
    <div className={styles.main}>
      {Data.map((item, key) => (
        <Product name={item.name} img={item.src} key={key} />
      ))}
    </div>
  );
};

export default ProductCard;

const Data = [
  { name: "HEADPHONES", src: "assets/headphones.svg" },
  { name: "SPEAKERS", src: "assets/speakers.svg" },
  { name: "EARPHONES", src: "assets/earphones.svg" },
];
