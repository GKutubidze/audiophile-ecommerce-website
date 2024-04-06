import React from "react";
import styles from "./page.module.css";
import ProductTitle from "../components/ProductTitle/ProductTitle";
import ProductsDescribe from "../components/ProductsDescribe/ProductsDescribe";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Products/ProductCard";
import AudioGearCenter from "../components/HomeComponent/AudioGear/AudioGearCenter";
import Header from "../components/Header/Header";

const HeadphonesPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <ProductTitle title="headphones" />
      <ProductsDescribe />
      <ProductCard/>
      <AudioGearCenter/>
      <Footer />
    </div>
  );
};

export default HeadphonesPage;
