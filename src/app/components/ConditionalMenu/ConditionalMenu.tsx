"use client";
import React, { useContext } from "react";
import styles from "./ConditionalMenu.module.css";
import ProductCard from "../Products/ProductCard";
 const ConditionalMenu = () => {
 
  return (
    <div className={styles.main}>
      <ProductCard />
    </div>
  );
};

export default ConditionalMenu;
